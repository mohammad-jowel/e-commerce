# Generated by Django 5.0.2 on 2024-03-29 10:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_movies'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movies',
            name='year',
        ),
    ]
