# Generated by Django 3.2.4 on 2021-09-16 17:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('messenger_backend', '0002_auto_20210915_1419'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='user1ViewedAt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='conversation',
            name='user2ViewedAt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
