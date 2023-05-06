from django.db import models
class User(models.Model):
    UserName = models.CharField(max_length=225)
    Password = models.CharField(max_length=225)
    Email = models.CharField(max_length=225,null=True)