from django.db import models
from .User import User
from .Chapter import Chapter
class History(models.Model):
    User = models.ForeignKey(User,on_delete=models.CASCADE)
    Chapter = models.ForeignKey(Chapter,on_delete=models.CASCADE)
    Rating = models.IntegerField(null=True)
    