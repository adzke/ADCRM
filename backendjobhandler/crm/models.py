from django.db import models

class Contact(models.Model):
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    companyname = models.CharField(max_length=200)
    jobtitle = models.CharField(max_length=200)
    notes = models.TextField() 
    mobile = models.CharField(max_length=200)

   
    
    def __str__(self):
        return self.companyname