from django.db import models
from .User import User
class Story(models.Model):
    StoryName = models.CharField(max_length=225)
    Description = models.TextField(max_length=1000)
    Author = models.CharField(max_length=225,null=True)
    Source = models.CharField(max_length=225,null=True)
    Status = models.CharField(max_length=225,null=True)
    CoverImage = models.CharField(max_length=225,null=True)
    User = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    