from django.db import models
from .User import User
from .Role import Role
class UserRole(models.Model):
    User = models.ForeignKey(User,on_delete=models.CASCADE)
    Role = models.ForeignKey(Role,on_delete=models.CASCADE)

    