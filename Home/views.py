from django.shortcuts import render

# Create your views here.
def Login(request):
    return render(request,'login.html')
def Index(request):
    return render(request,'index.html')
def Read(request,StoryID,chapternumber):
    return render(request,'read.html')
def Intro(request,StoryID):
    return render(request,'intro.html')
def SignUp(request):
    return render(request,'signup.html')
def Hot(request):
    return render(request,'hot.html')
def List(request,CategoryID):
    return render(request,'list.html')
def Setting(request):
    return render(request,'setting.html')
def ChapterFromTo(request):
    return render(request,'ChapterFromTo.html')
def StoryByAuthor(request):
    return render(request,'upstory.html')
def Search(request,key):
    return render(request,'search.html')
# def StoryByAuthor(request):
#     return render(request,'')
def New(request):
    return render(request,'writenew.html')
def NewChapter(request):
    return render(request,'writenewchapter.html')