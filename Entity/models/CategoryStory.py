from django.db import models
from .Story import Story
from .Category import Category
class CategoryStory(models.Model):
    Story = models.ForeignKey(Story,on_delete=models.CASCADE)
    Category = models.ForeignKey(Category,on_delete=models.CASCADE)

    