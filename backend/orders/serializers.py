from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer
from cart.models import CartItem
from django.db import transaction

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'total_price', 'status', 'created_at', 'items']


# class CheckoutSerializer(serializers.Serializer):
#     # لا نحتاج fields من Model مباشرة لأننا نحول Cart -> Order
#     def create(self, validated_data):
#         user = self.context['request'].user
#         cart_items = CartItem.objects.filter(user=user)
#         if not cart_items.exists():
#             raise serializers.ValidationError("السلة فارغة!")
#
#         total_price = sum(item.product.price * item.quantity for item in cart_items)
#         order = Order.objects.create(user=user, total_price=total_price)
#
#         for item in cart_items:
#             OrderItem.objects.create(
#                 order=order,
#                 product=item.product,
#                 quantity=item.quantity,
#                 price=item.product.price
#             )
#             # تقليل المخزون
#             item.product.stock -= item.quantity
#             item.product.save()
#
#         # بعد إنشاء الطلب، مسح السلة
#         cart_items.delete()
#
#         return order
class CheckoutSerializer(serializers.Serializer):

    def create(self, validated_data):
        user = self.context['request'].user
        cart_items = CartItem.objects.select_related('product').filter(user=user)

        if not cart_items.exists():
            raise serializers.ValidationError("السلة فارغة!")

        with transaction.atomic():
            total_price = 0
            order = Order.objects.create(user=user, total_price=0)

            for item in cart_items:
                product = item.product

                # ✅ تحقق من المخزون
                if product.stock < item.quantity:
                    raise serializers.ValidationError(
                        f"الكمية غير متاحة للمنتج: {product.name}"
                    )

                OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=item.quantity,
                    price=product.price
                )

                # تقليل المخزون
                product.stock -= item.quantity
                product.save()

                total_price += product.price * item.quantity

            order.total_price = total_price
            order.save()

            # مسح السلة
            cart_items.delete()

        return order

class OrderStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['status']