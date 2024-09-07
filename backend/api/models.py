from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        null=True,
        blank=True,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email
    
class Catragoty(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=2, decimal_places=2 )
    catragoty = models.ForeignKey(Catragoty, on_delete=models.CASCADE, blank=True)
    stock = models.PositiveIntegerField()
    image_url = models.URLField(max_length=200, blank=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "old_price": self.price / (1 - self.discount),
            "discount": self.discount * 100,
            "stock": self.stock,
            "image_url": self.image_url,
        }

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    item = models.ForeignKey('Product', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def serialize(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "item_id": self.item.id,
            "name": self.item.name, 
            "price": self.item.price,
            "image_url": self.item.image_url,
            "created_at": self.created_at
        }

    def __str__(self):
        return f"Cart of {self.user.username} containing {self.item.name}"