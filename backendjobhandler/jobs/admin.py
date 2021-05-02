from django.contrib import admin
from .models import Job, Company, Employee, Gender, RelationshipHealth, EmployeeInteraction, JobStatus

admin.site.register(Job),
admin.site.register(Company),
admin.site.register(Employee)
admin.site.register(Gender)
admin.site.register(RelationshipHealth)
admin.site.register(EmployeeInteraction)
admin.site.register(JobStatus)