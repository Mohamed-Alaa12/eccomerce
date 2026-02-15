from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserProfileSerializer, ChangePasswordSerializer
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.response import Response

class UserRegisterAPIView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer

class UserLoginAPIView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)

class UserProfileAPIView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # نرجع المستخدم الحالي فقط
        return self.request.user

class ChangePasswordAPIView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)

        # تحديث كلمة المرور
        user.set_password(serializer.validated_data['new_password'])
        user.save()

        return Response({"detail": "تم تغيير كلمة المرور بنجاح"}, status=status.HTTP_200_OK)