# Generated by Django 5.0.2 on 2024-05-08 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_movies_year'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Movies',
        ),
    ]
