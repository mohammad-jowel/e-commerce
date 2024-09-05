from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):

    def serialize(self):
        return {
            "id":self.id,
            "username": self.username,
        }
    
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image_url = models.URLField(max_length=200, blank=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "stock": self.stock,
            "image_url": self.image_url,
        }

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey('Product', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def serialize(self):
        return {
            "id": self.id,
            "item": self.item.name,
            "created_at": self.created_at,
        }

    def __str__(self):
        return f"Cart of {self.user.username} containing {self.item.name}"