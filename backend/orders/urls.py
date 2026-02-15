from django.urls import path
from .views import CheckoutAPIView, OrderListAPIView, UserOrdersListAPIView,UserOrderDetailAPIView,OrderStatusUpdateAPIView,AdminOrdersListAPIView

urlpatterns = [
    path('checkout/', CheckoutAPIView.as_view(), name='checkout'),
    path('', OrderListAPIView.as_view(), name='order_list'),
    path('my-orders/', UserOrdersListAPIView.as_view()),
    path('<int:id>/', UserOrderDetailAPIView.as_view()),
    path('status/<int:id>/', OrderStatusUpdateAPIView.as_view()),
    path('admin/all/', AdminOrdersListAPIView.as_view()),
]