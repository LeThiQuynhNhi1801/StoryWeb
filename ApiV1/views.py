from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
import json
import jwt
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from Entity.models.User import User
from Entity.models.UserRole import UserRole
from Entity.models.Role import Role
from Entity.models.Story import Story
from Entity.models.Histoty import History
from Entity.models.CategoryStory import CategoryStory
from Entity.models.Category import Category
from django.db.models import Count
from Entity.models.Chapter import Chapter

class HotList(APIView):
    def get(self,request):
        histoy = History.objects.values('Chapter__Story__pk').annotate(total=Count('Chapter__Story__pk')).order_by('-total')
        story=[]
        for i in histoy:
            print(i)
            storyQuery= Story.objects.get(pk=i['Chapter__Story__pk'])
            story.append({"id":storyQuery.pk,"StoryName":storyQuery.StoryName})
        print(story)
        return HttpResponse(json.dumps(story),status=200)
class Login(APIView):
    def post(self,request):
        
        if  'username' not in request.data:
            return HttpResponse(json.dumps({"massage":"Chưa nhập tên tài khoản"}),status=200)
        userName = request.data['username']
        if  'password' not in request.data:
            return HttpResponse(json.dumps({"massage":"Chưa nhập mật khẩu"}),status=400)    
        password = request.data['password']
        try:
            user = User.objects.get(UserName=userName,Password=password)
        except:
            return HttpResponse(json.dumps({"massage":"Sai tài khoản"}),status=401) 
        print(userName,password)
        return HttpResponse(json.dumps({"ID":user.id}),status=201)
class Signup(APIView):
    def  post(self,request):
        print(request.data)
        if  'username' not in request.data:
            return HttpResponse(json.dumps({"massage":"nhap tk di"}),status=400)
        userName = request.data['username']
        
        try:
            User.objects.get(UserName=userName)
            return HttpResponse(json.dumps({"massage":"usernam da ton tai"}),status=409)
        except:
            if  'password' not in request.data:
                return HttpResponse(json.dumps({"massage":"nhap pass di"}),status=400)    
            password = request.data['password']
            newUser =User(UserName=userName,Password=password)
            role=Role.objects.get(pk=2)
            newUser.save()
            newRole=UserRole(Role=role,User=newUser)
            newRole.save()
        return HttpResponse(json.dumps({"ID":newUser.id}),status=201)
class StoryByID(APIView):
    def get(self,request,StoryID):
        storyQuery = CategoryStory.objects.filter(Story__pk=StoryID) [0]
        print(storyQuery)
        story={"id":storyQuery.Story.id,"StoryName":storyQuery.Story.StoryName,"Description":storyQuery.Story.Description,"Author":storyQuery.Story.Author,"Source":storyQuery.Story.Source,"coverImage":storyQuery.Story.CoverImage,"statu":storyQuery.Story.Status,"CategoryName":storyQuery.Category.CategoryName}
        print(story)
        return HttpResponse(json.dumps(story),status=200)
class Recommend(APIView):
    def get(self,request):
        userID=request.headers['userID']
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute('SELECT entity_category.id,entity_story.id, count(entity_category.id) FROM entity_history join entity_chapter on entity_chapter.id=entity_history.Chapter_id join entity_story on entity_story.id=entity_chapter.Story_id join entity_categorystory on entity_story.id=entity_categorystory.Story_id join entity_category on entity_category.id=entity_categorystory.Category_id where entity_history.User_id='+str(userID)+'  group by entity_category.id,entity_story.id')
            rows = cursor.fetchall()
            a = []
            for i in range(len(rows)):
                a.append(rows[i][0])
        story=[]
        try:
            categoryStorys= CategoryStory.objects.filter(Category__id=max(set(a),key = a.count))
            story= [{"id":categoryStory.Story.id,"StoryName":categoryStory.Story.StoryName,'CoverImage':categoryStory.Story.CoverImage} for categoryStory in categoryStorys ]
        except:
            return HttpResponse(json.dumps(story),status=204)
        return HttpResponse(json.dumps(story[:10]),status=200)
class StoryByIDCategory(APIView):
    def get(self,request,CategoryID):
        storyQuery = CategoryStory.objects.filter(Category__pk=CategoryID)
        story =[]
        for i in storyQuery:
            story.append({"idCategory":i.Category.id,"id":i.Story.id,"CategoryName":i.Category.CategoryName,"StoryName":i.Story.StoryName,"Description":i.Story.Description,"Author":i.Story.Author,"Source":i.Story.Source,"coverImage":i.Story.CoverImage,"statu":i.Story.Status})
        # story={"id":storyQuery.Story.id,"StoryName":storyQuery.Story.StoryName,"Description":storyQuery.Story.Description,"Author":storyQuery.Story.Author,"Source":storyQuery.Story.Source,"coverImage":storyQuery.Story.CoverImage,"statu":storyQuery.Story.Status,"Type":storyQuery.Category.CategoryName}
        print(story)
        return HttpResponse(json.dumps(story),status=200)
class ChapterByIdChapter(APIView):
    def get(self,request,ChapterID):
        chapterQuery = Chapter.objects.get(pk=ChapterID)
        chapter = {"id":chapterQuery.id,"StoryName":chapterQuery.Story.StoryName,"ChapterName":chapterQuery.ChapterName,"ChapterNumber":chapterQuery.ChapterNumber,"Content":chapterQuery.ContentStory}
        print(chapter)
        return HttpResponse(json.dumps(chapter),status=200)
class ListChapterByStoryID(APIView):
    def get(self,request,StoryID):
        chapterQuery = Chapter.objects.filter(Story__pk=StoryID)
        chapter = []    
        for i in chapterQuery:
            chapter.append({"id":i.pk,"ChapterNumber":i.ChapterNumber,"ChapterName":i.ChapterName,"Content":i.ContentStory})
        print(chapter)    
        return HttpResponse(json.dumps(chapter),status=200)        
class listCategory(APIView):
    def get(self,request):
        listQuery = Category.objects.all()
        list = []
        for i in listQuery:
            list.append({"id":i.id,"CategoryName":i.CategoryName})
        print(list)
        return HttpResponse(json.dumps(list),status=200)    
class listRole(APIView):
    def get(self,request):
        userID=request.headers['userID']
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute('SELECT entity_role.id,entity_role.RoleName  FROM entity_user join entity_userrole on entity_user.id=entity_userrole.User_id join entity_role on entity_userrole.Role_id=entity_role.id where User_id='+str(userID)+'  group by entity_role.id')
            rows = cursor.fetchall()
            a = []
            for i in range(len(rows)):
                a.append({"idRole":rows[i][0],"RoleName":rows[i][1]})
        print(a)
        return HttpResponse(json.dumps(a),status=200)
class ListStory(APIView):
    def get(self,request):
        storyQuery = Story.objects.all()
        story= []
        for i in storyQuery:
            story.append({"id":i.id,"StoryName":i.StoryName,"Description":i.Description,"Author":i.Author,"Source":i.Source,"coverImage":i.CoverImage,"statu":i.Status})
        print(story)
        return HttpResponse(json.dumps(story),status=200)
class ChapterFromTo(APIView):
    def get(self,request):
        if not request.GET.get('From'):
            From=0
        else:
            From=request.GET.get('From')
        if request.GET.get('To'):
            To=request.GET.get('To')
            story =Story.objects.values('id','StoryName').annotate(count=Count('chapter__pk')).filter(count__gt=From,count__lte=To)     
        else:
            story =Story.objects.values('id','StoryName').annotate(count=Count('chapter__pk')).filter(count__gt=From)
        storyList=[]
        for i in story:
            storyList.append({'id':i['id'],'StoryName':i['StoryName'],'count':i['count']})
        return HttpResponse(json.dumps(storyList),status=200)
class Search(APIView):
    def get(self, request, key):
        storyQuery = Story.objects.filter(Q(StoryName__icontains=key)|Q(Author__icontains=key))
        story = []
        for i in storyQuery:
            story.append({"id":i.pk,"StoryName":i.StoryName,"Author":i.Author})
        return HttpResponse(json.dumps(story),status=200)
class StoryByAuthor(APIView):
    def get(self,request):
        userID=request.headers['userID']
        storyQuery = Story.objects.filter(User__id=userID)
        story = []
        for i in storyQuery:
            story.append({"id":i.pk,"StoryName":i.StoryName})
        return HttpResponse(json.dumps(story),status=200)     
class Delete(APIView):
    def delete(self,request,StoryID):
        print(StoryID)
        story = Story.objects.get(pk=StoryID)
        print(story)
        story.delete()
        return HttpResponse(json.dumps({"massage":'Đã xoá thành công !'}),status=204)
# class Post(APIView):
#     def post(self,request):

