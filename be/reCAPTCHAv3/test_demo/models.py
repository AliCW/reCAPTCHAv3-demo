from django.db import models

class SendKey(models.Model):
    key = models.CharField(max_length=100)
    def __str__(self):
        return self.key
