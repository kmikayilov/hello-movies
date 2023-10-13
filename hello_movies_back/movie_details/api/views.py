from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework import generics

from ..models import Movie
from .serializers import MovieSerializer


class MovieListAPIView(generics.ListAPIView):

    queryset = Movie.objects.all().order_by("-id")
    serializer_class = MovieSerializer
    filter_backends = (DjangoFilterBackend,)

    def get_queryset(self):

        title = self.request.query_params.get('title', "")

        qs = super().get_queryset()

        if title:
            qs = qs.filter(title__icontains=title)

        return qs

class MovieDetailAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'id'
