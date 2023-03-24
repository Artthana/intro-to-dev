from os import name
from django.urls import path
from myapp import views

urlpatterns = [
    path('',views.index, name='home'),
    path('about',views.about, name='about'),
    path('form',views.form, name='form'),
    path('edit/<person_id>',views.edit, name='edit'),
    path('delete/<person_id>',views.delete, name='delete')
]