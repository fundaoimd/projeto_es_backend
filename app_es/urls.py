from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static

def redirect_to_swagger(request):
    return redirect('/gloria-maria/api/v1/schema/swagger/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('gloria-maria/api/v1/', include('api.urls')),
    path('gloria-maria/api/v1/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('gloria-maria/api/v1/schema/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('', redirect_to_swagger),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)