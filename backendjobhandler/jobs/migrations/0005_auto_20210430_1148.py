# Generated by Django 3.1.6 on 2021-04-30 01:48

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_auto_20210408_1044'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='employee_work_number',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, null=True, region=None, unique=True),
        ),
    ]
