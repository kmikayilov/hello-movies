from rest_framework import serializers
from movie_details.models import Movie

from urllib.parse import unquote


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = "__all__"

    def to_representation(self, instance):
        repr_ = super().to_representation(instance)

        # I took the images and db from internet and all images are absolute paths to internet based db. So, to get these correct paths, 
        # I modify the information here, starting by removing the relative path symbol (/) and uncoding the path to make it in correct way
        if instance.image and instance.image.url:
            repr_['image'] = unquote(instance.image.url[1:])

        for field, value in repr_.items():
            if not value:
                repr_[field] = '-'

        return repr_
