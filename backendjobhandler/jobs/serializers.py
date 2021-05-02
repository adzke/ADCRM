from rest_framework import serializers

from .models import Job, Employee, Company, EmployeeInteraction, RelationshipHealth, Gender

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class EmployeeInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeInteraction
        fields = '__all__'

class EmployeeInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeInteraction
        fields = '__all__'

class RelationshipHealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = RelationshipHealth
        fields = '__all__'

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'

