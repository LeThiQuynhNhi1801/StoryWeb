from django.db import models
from .Story import Story
class Chapter(models.Model):
    Story = models.ForeignKey(Story,on_delete=models.CASCADE,related_name="chapter")
    ChapterNumber = models.IntegerField()
    ChapterName = models.CharField(max_length=225)
    ContentStory = models.TextField(max_length=225)