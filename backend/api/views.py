from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def home(request):
    users = User.objects.all()
    return Response([user.serialize() for user in users])

@api_view(['POST'])
@permission_classes([AllowAny])
def singup(request):
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']

    if not(username and email and password):
        return Response("User info is requried.", status=status.HTTP_400_BAD_REQUEST)
    if len(password) < 8:
        return Response("Password must be eight characters.", status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username, email, password)
        user.save()

        refresh = RefreshToken.for_user(user)
        # Add custom claims
        refresh['username'] = user.username

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
