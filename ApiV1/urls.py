from django.urls import path
from .views import Search,Login,Signup,HotList,StoryByID,Recommend,StoryByIDCategory,ChapterByChapterNumber,ListStory,ListChapterByStoryID,listCategory,listRole,ChapterFromTo,StoryByAuthor,Delete,Historys
from .views import PostNewStory,PostNewChapter,Duyet,HistoryBrowser,Updatechapter,UpdateSave,ListStoryDelete,Delete2,Restore,ReadHistory,Manage,DeleteUser,UserByIdUser,SaveEmail,SaveUserName,ChangePasswordView
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
    path('delete2/<int:StoryID>',Delete2.as_view()),
    path('history/<int:StoryID>/<int:chapternumber>',Historys.as_view()),
    path('writenew',PostNewStory.as_view()),
    path('writenewchapter/<int:StoryID>',PostNewChapter.as_view()),
    path('duyet/<int:StoryID>',Duyet.as_view()),
    path('historybrowser',HistoryBrowser.as_view()),
    path('listchapter/<int:StoryID>',ListChapterByStoryID.as_view()),
    path('updatechapter/<int:ChapterID>',Updatechapter.as_view()),
    path('updatesave/<int:ChapterID>',UpdateSave.as_view()),
    path('listdelete',ListStoryDelete.as_view()),
    path('restore/<int:StoryID>',Restore.as_view()),
    path('readhistory',ReadHistory.as_view()),
    path('manage',Manage.as_view()),
    path('deleteuser/<int:id>',DeleteUser.as_view()),
    path('user',UserByIdUser.as_view()),
    path('saveusername',SaveUserName.as_view()),
    path('saveemail',SaveEmail.as_view()),
    path('savepassword',ChangePasswordView.as_view())
]