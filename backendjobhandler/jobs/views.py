from rest_framework import viewsets, permissions

from .serializers import JobSerializer, EmployeeSerializer, CompanySerializer, EmployeeInteractionSerializer, RelationshipHealthSerializer, GenderSerializer
from .models import Job, Employee, Company, EmployeeInteraction, RelationshipHealth, Gender


class JobViewSet(viewsets.ModelViewSet):
    permission_classes = [
            permissions.IsAuthenticated

        ]

    serializer_class = JobSerializer
    queryset = Job.objects.all().order_by('-job_value')
    



class EmployeeViewSet(viewsets.ModelViewSet):
  
    
    queryset = Employee.objects.all().order_by('employee_name')
    serializer_class = EmployeeSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    queryset = Company.objects.all().order_by('company_name')
    serializer_class = CompanySerializer


class EmployeeInteractionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    queryset = EmployeeInteraction.objects.all().order_by('-interaction_date')
    serializer_class = EmployeeInteractionSerializer


class RelationshipHealthViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    queryset = RelationshipHealth.objects.all().order_by('-relationshiphealth')
    serializer_class = RelationshipHealthSerializer


class GenderViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    queryset = Gender.objects.all().order_by('-gender')
    serializer_class = GenderSerializer