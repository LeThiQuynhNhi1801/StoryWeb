Intro();
function Intro(){
    
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
            var ResponseJson=xhttp.responseText;
            //chuyển về dữ liệU javascript
            var response= JSON.parse(ResponseJson);
            if(xhttp.status==200){
                var s = document.getElementById('intro');
                var s1 = '<h1>THÔNG TIN TRUYỆN</h1><div class="container__information__intro"><div class="information__intro__basic"><a href=""><img src="'+response['coverImage']+'" alt="ảnh"></a><div class="information__intro__info"><h3>Tác giả : <span>'+response['Author']+'</span></h3><h3>Thể loại : <span>'+response['CategoryName']+'</span></h3><h3>Nguồn : <span>'+response['Source']+'</span></h3><h3>Trạng thái : <span>'+response['statu']+'</span></h3></div></div><div class="information__intro__text"><h2>'+response['StoryName']+'</h2><p>'+response['Description']+'</p></div></div>';
                s.innerHTML=s1;
                console.log(s1);
            }
        } 
        //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/intro/"+window.location.pathname.substring(7),false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    xhttp.setRequestHeader('userID',localStorage.getItem('StoryID'));
    //gửi
    xhttp.send();    
}
const xhttp = new XMLHttpRequest();
//nhận dự liệu về (http response)
xhttp.onload = function() 
{
    
    if(xhttp.status==200)
    {
            //lấy dữ liệu dạng json
        var responseJson=xhttp.responseText
        //chuyển về dữ liệU javascript
        var response= JSON.parse(responseJson)
        var s1 = document.getElementById('recommend');
        var s1Html ='<h1>Có thể bạn thích ? </h1>';
        for(var i=0;i<response.length;i++){
            s1Html+='<a href="/intro/'+response[i]['id']+'">'+response[i]['StoryName']+'</a>';
        }
        s1.innerHTML=s1Html;
    }
    else if(xhttp.status==204)
    {
        HotRCM();
    }
}         
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/StoryByIdUser",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();

function HotRCM()
{
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200)
            {
                var s2 = document.getElementById('recommend');

                var s2Html='<h2>Có thể bạn thích ? </h2>';
                for(var i =0;i<Response.length;i++)
                {
                    s2Html+='<a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a>';
                }
                s2.innerHTML = s2Html;
            }
            else
            {
               
            }
        }         
        //khai báo phương thức và đường dẫn để request
        xhttp.open("GET", "/apiV1/hot",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send();
}
ListChapter();
function ListChapter(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
            var ResponseJson=xhttp.responseText;
            //chuyển về dữ liệU javascript
            var response= JSON.parse(ResponseJson);
            if(xhttp.status=200){
                var s = document.getElementById('listchapter');
                var s1 = '';
                for( var i=0;i<response.length;i++){
                    s1+='<a href="/read/'+response[i]['id']+'">Chương '+response[i]['ChapterNumber']+': '+response[i]['ChapterName']+'</a>';
                }
                s.innerHTML=s1;
            }
        }
            //khai báo phương thức và đường dẫn để request
        xhttp.open("GET", "/apiV1/ListChapterByStoryID/"+window.location.pathname.substring(7),false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send();
}
if(localStorage.getItem('userID')==null){
    window.location='/login';
} else{
    userID=null;
    var a=document.getElementById('signup');
    var a1='<a href="login" oncick="logout()">ĐĂNG XUẤT<i class="fas fa-user"></i></a>';
    a.innerHTML=a1;
}
function logout(){
    window.localStorage.removeItem('userID');
} 
