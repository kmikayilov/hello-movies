from django.urls import path

from . import views

app_name = "movies-api"

urlpatterns = [
    path("list/", views.MovieListAPIView.as_view(), name="list"),
    path("detail/<int:id>", views.MovieDetailAPIView.as_view(), name="detail"),
]