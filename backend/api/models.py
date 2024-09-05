from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    
    def serialize(self):
        return {
            "id":self.id,
            "username": self.username,
        }