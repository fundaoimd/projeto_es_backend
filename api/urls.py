from django.urls import path, include
from rest_framework.routers import DefaultRouter
# Importar o novo ViewSet
from .views import ClientViewSet, EmployeeViewSet, ServicesViewSet

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'services', ServicesViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
