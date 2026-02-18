from django.contrib import admin
from .models import Photo, Profile

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'created_at')
    search_fields = ('title', 'description')

admin.site.register(Profile)
