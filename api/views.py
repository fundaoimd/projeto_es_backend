from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Employee # Importar o novo modelo Employee
from .serializers import ClientSerializer, EmployeeSerializer # Importar o novo serializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer