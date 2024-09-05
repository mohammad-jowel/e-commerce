from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .models import User, Product, Cart

from django.contrib.auth import authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = f"{user.first_name} {user.last_name}"

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, username=email, password=password)
        if user:
            return super().post(request, *args, **kwargs)
        else:
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([AllowAny])
def singup(request):
    first_name = request.data['first_name']
    last_name = request.data['last_name']
    email = request.data['email']
    password = request.data['password']

    if not(first_name and last_name and email and password):
        return Response("User info is requried.", status=status.HTTP_400_BAD_REQUEST)
    if len(password) < 8:
        return Response("Password must be eight characters.", status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(
            username=email, 
            first_name=first_name, 
            last_name=last_name, 
            email=email, 
            password=password
        )
        user.save()

        refresh = RefreshToken.for_user(user)
        # Add custom claims
        refresh['name'] = f"{user.first_name} {user.last_name}"

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

    except IntegrityError:
            return Response("Username already exist.", status=status.HTTP_400_BAD_REQUEST)
		
      
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def home(request):
    users = User.objects.all()
    print(request.user.is_authenticated)
    return Response([user.serialize() for user in users])


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    products = [p.serialze() for p in products]
    return Response(products, status=status.HTTP_200_OK)