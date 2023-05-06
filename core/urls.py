"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

from Home.views import Login,Index,Read,SignUp,Intro,Hot,List,Setting,ChapterFromTo,Search,StoryByAuthor,New,NewChapter,image_view,HistoryBrowser,ListChapter,Updatechapter,ReadHistory,Manage,UserByIdUser,ChangePasswordView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login',Login),
    path('index',Index),
    path('hot',Hot),
    # path('read',Read),
    path('signup',SignUp),
    path('apiV1/',include('ApiV1.urls')),
    path('intro/<int:StoryID>',Intro),
    path('read/<int:StoryID>/<int:chapternumber>',Read),
    path('list/<int:CategoryID>',List),
    path('setting',Setting),
    path('ChapterFromTo',ChapterFromTo),
    path('upstory',StoryByAuthor),
    path('search/<str:key>',Search),
    path('writenew',New),
    path('historybrowser',HistoryBrowser),
    path('writenewchapter/<int:StoryID>',NewChapter),
    path('Home/Media/<str:image_name>',image_view),
    path('listchapter/<int:StoryID>',ListChapter),
    path('updatechapter/<int:ChapterID>',Updatechapter),
    path('readhistory',ReadHistory),
    path('manage',Manage),
    path('user',UserByIdUser),
    path('savepassword',ChangePasswordView)
    
]
