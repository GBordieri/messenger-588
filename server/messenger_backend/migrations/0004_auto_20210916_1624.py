# Generated by Django 3.2.4 on 2021-09-16 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messenger_backend', '0003_auto_20210916_1324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='user1ViewedAt',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='conversation',
            name='user2ViewedAt',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]