# Generated by Django 5.0.2 on 2024-09-06 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_product_discount_alter_user_email_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="cart",
            name="quantity",
            field=models.PositiveIntegerField(default=1),
        ),
    ]
