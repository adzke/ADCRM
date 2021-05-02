from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include

from django.conf import settings
from django.views.static import serve 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('jobs.urls')),
    path('', include('crm.urls')),
    path('', include('accounts.urls'))
 ]

if settings.DEBUG:
     urlpatterns += [
         url(r'^media/(?P<path>.*)$', serve, {
             'document_root': settings.MEDIA_ROOT,
         }),
     ]