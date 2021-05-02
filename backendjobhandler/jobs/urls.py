from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'jobs', views.JobViewSet)
router.register(r'employee', views.EmployeeViewSet)
router.register(r'companies', views.CompanyViewSet)
router.register(r'interactions', views.EmployeeInteractionViewSet)
router.register(r'realtionshiphealth', views.RelationshipHealthViewSet)
router.register(r'gender', views.GenderViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]