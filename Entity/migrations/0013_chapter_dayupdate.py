# Generated by Django 4.1.7 on 2023-04-20 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Entity', '0012_story_daybrowser'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapter',
            name='DayUpDate',
            field=models.DateTimeField(null=True),
        ),
    ]
