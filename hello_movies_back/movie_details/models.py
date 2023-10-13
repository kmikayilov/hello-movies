from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=1000, null=True, blank=True)
    image = models.ImageField(upload_to='movie_images/', null=True, blank=True, max_length=1000)
    director = models.CharField(max_length=1000, null=True, blank=True)
    genres = models.CharField(max_length=1000, null=True, blank=True)
    duration = models.PositiveIntegerField(null=True, blank=True)
    score = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    rating = models.CharField(max_length=10, null=True, blank=True)  # e.g., "PG-13", "R", etc.
    overview = models.TextField(null=True, blank=True)
    year = models.PositiveIntegerField(null=True, blank=True)
    actors = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.title