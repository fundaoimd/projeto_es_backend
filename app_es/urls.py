from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # A linha abaixo já existe, mas a próxima é a que você precisa adicionar
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),  # Adicione esta linha
]