# Generated by Django 5.0.2 on 2024-09-08 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0009_rename_catragoty_product_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="regular_price",
            field=models.DecimalField(
                blank=True, decimal_places=2, default=800, max_digits=10
            ),
            preserve_default=False,
        ),
    ]
