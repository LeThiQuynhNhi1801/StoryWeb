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
def NewChapter(request,StoryID):
    return render(request,'writenewchapter.html')
def HistoryBrowser(request):
    return render(request,'historybrowser.html')
def ListChapter(request,StoryID):
    return render(request,'update.html')
def Updatechapter(request,ChapterID):
    return render(request,'updatechapter.html')
from django.http import HttpResponse
from core.settings import MEDIA_ROOT
import os

def image_view(request, image_name):
    print("ahihi")
    # Lấy đường dẫn tới thư mục chứa các tệp hình ảnh
    image_dir = MEDIA_ROOT
    
    # Tạo đường dẫn tới tệp hình ảnh cần trả về
    image_path = os.path.join(image_dir, image_name)
    print(image_path)
    # Đọc nội dung của tệp hình ảnh
    with open(image_path, 'rb') as f:
        image_data = f.read()
    
    # Trả về nội dung của hình ảnh dưới dạng phản hồi HTTP
    response = HttpResponse(content_type='image/png')
    response.write(image_data)
    
    return response
