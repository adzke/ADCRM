from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Job(models.Model):
    job_name = models.CharField(max_length=200)
    company_name = models.ForeignKey('Company', on_delete=models.CASCADE, to_field="company_name", null=True)
    employee_name = models.ForeignKey('Employee', on_delete=models.CASCADE, to_field="employee_name", null=True)
    file_upload = models.FileField(upload_to='fileuploads/', null=True, blank=True)
    job_value = models.DecimalField(max_digits=10, decimal_places=2)
    job_files = models.FileField(upload_to='job_files/', null=True, blank=True)
    invoice_files = models.FileField(upload_to='invoices/', null=True, blank=True)
    purchase_orders = models.FileField(upload_to='purchase_orders/', null=True, blank=True)
    receipts = models.FileField(upload_to='purchase_orders/', null=True, blank=True)
    job_status = models.ForeignKey('JobStatus', on_delete=models.CASCADE, to_field="job_status", null=True, blank=False)
    job_notes = models.TextField(default="Please add some notes about this job") 
    job_due_date = models.DateField(null=True, blank=True)





    def __str__(self):
        return self.job_name


class Company(models.Model):

    company_name = models.CharField(max_length=200, unique=True)
    company_address = models.CharField(max_length=200, null=True)
    company_ceo = models.ForeignKey('Employee', on_delete=models.CASCADE, to_field="employee_name", null=True, blank=True)



    
    def __str__(self):
        return self.company_name


class Employee(models.Model):

    employee_name = models.CharField(max_length=200, unique=True)
    company_name = models.ForeignKey('Company', on_delete=models.CASCADE, to_field="company_name", null=True)
    employee_email = models.EmailField(max_length=200, unique=True, null=True)
    employee_mobile_number = PhoneNumberField(unique=True, null=True)
    employee_work_number = PhoneNumberField(unique=True, null=True)
    employee_job_position = models.CharField(max_length=200, null=False, blank=False, default="None Defined")
    employee_active = models.BooleanField(default=True)
    employee_notes = models.TextField(default="Please add some notes about this employee")
    gender = models.ForeignKey('Gender', on_delete=models.CASCADE, to_field="gender", null=True, default="Other", blank=True)
    relationshiphealth = models.ForeignKey('RelationshipHealth', on_delete=models.CASCADE, to_field="relationshiphealth", null=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    

    def __str__(self):
        return self.employee_name



class Gender(models.Model):

    gender = models.CharField(max_length=200, unique=True, default="Other", blank=True)
    


    def __str__(self):
        return self.gender


class RelationshipHealth(models.Model):

    relationshiphealth = models.CharField(max_length=200, unique=True, default="Good", blank=True)
    


    def __str__(self):
        return self.relationshiphealth


class EmployeeInteraction(models.Model):
    interaction_name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    interaction_date = models.DateField()
    interaction_time = models.TimeField()
    meeting_items = models.CharField(max_length=200, blank=True, null=True)
    meeting_notes = models.TextField()
    employee_name = models.ForeignKey('Employee', on_delete=models.CASCADE, to_field="employee_name", null=True, blank=False)
    


    def __str__(self):
        return self.interaction_name


class JobStatus(models.Model):

    job_status = models.CharField(max_length=200, unique=True, default="In Progress", blank=True, )
    


    def __str__(self):
        return self.job_status