from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("signup", views.signup, name="signup"),
    path("logout", views.logout, name="logout"),
    path("get_products", views.get_products, name="get_products"),
    path("get_categories", views.get_categories, name="get_categories"),
    path("add_to_cart", views.add_to_cart, name="add_to_cart"),
    path("get_cart", views.get_cart, name="get_cart"),
    path("remove_from_cart", views.remove_from_cart, name="remove_from_cart")
]