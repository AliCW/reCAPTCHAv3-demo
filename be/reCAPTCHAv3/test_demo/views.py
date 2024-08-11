from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import SendKey
import requests
from django.views.decorators.csrf import csrf_exempt


class ReCaptchaV3:
    @csrf_exempt
    def check(request):
        key = 'test'
        return HttpResponse(key)
        #checkCAPTCHA = requests.post('https://www.google.com/recaptcha/api/siteverify', data={'secret': key, 'response': request})
        #return HttpResponse(checkCAPTCHA)