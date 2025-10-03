from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, EmployeeViewSet # Importar o novo ViewSet

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'employees', EmployeeViewSet) 

urlpatterns = [
    path('', include(router.urls)),
]