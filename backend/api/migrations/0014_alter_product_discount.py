# Generated by Django 5.0.2 on 2024-09-08 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0013_alter_product_discount_alter_product_regular_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="discount",
            field=models.IntegerField(blank=True, max_length=10, null=True),
        ),
    ]
