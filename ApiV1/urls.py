from django.urls import path
from .views import Search,Login,Signup,HotList,StoryByID,Recommend,StoryByIDCategory,ChapterByChapterNumber,ListStory,ListChapterByStoryID,listCategory,listRole,ChapterFromTo,StoryByAuthor,Delete,Historys

urlpatterns = [
    path('login',Login.as_view()),

    path('signup',Signup.as_view()),
    path('hot',HotList.as_view()),
    path('index',HotList.as_view()),
    path('Story/<int:StoryID>',StoryByID.as_view()),
    path('StoryByIdUser',Recommend.as_view()),
    path('intro/<int:StoryID>',StoryByID.as_view()),
    path('StoryByIDCategory/<int:CategoryID>',StoryByIDCategory.as_view()),
    path('read/<int:StoryID>/<int:chapternumber>',ChapterByChapterNumber.as_view()),
    path('ListChapterByStoryID/<int:StoryID>',ListChapterByStoryID.as_view()),
    path('listCategory',listCategory.as_view()),
    path('RoleByIdUser',listRole.as_view()),
    path('listStory',ListStory.as_view()),
    path('ChapterFromTo',ChapterFromTo.as_view()),
    path('search/<str:key>',Search.as_view()),
    path('upstory',StoryByAuthor.as_view()),
    path('delete/<int:StoryID>',Delete.as_view()),
    path('history/<int:StoryID>/<int:chapternumber>',Historys.as_view())

]