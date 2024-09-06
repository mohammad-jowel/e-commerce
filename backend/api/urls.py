from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("singup", views.singup, name="singup"),
    path("logout", views.logout, name="logout"),
    path("get_products", views.get_products, name="get_products"),
    path("add_to_cart", views.add_to_cart, name="add_to_cart"),
]