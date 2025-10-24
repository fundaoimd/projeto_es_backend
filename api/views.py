from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Employee, Services  # Importar o novo modelo Employee
# Importar o novo serializer
from .serializers import ClientSerializer, EmployeeSerializer, ServicesSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
