StoryByCategoryID();
function StoryByCategoryID(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
        var ResponseJson=xhttp.responseText;
        //chuyển về dữ liệU javascript
        var response= JSON.parse(ResponseJson);    
        if(xhttp.status==200){
            var s = document.getElementById('listStoryByIdCategory');
            var sHtml = '';
            for(var i=0;i<response.length;i++){
                sHtml+='<li><a href="/list/'+response[i]['id']+'">'+response[i]['CategoryName']+'</a></li>';
            }
            s.innerHTML = sHtml;
        }
    }
        //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/listCategory",false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //gửi
    xhttp.send();
}

role();
function role(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
        var ResponseJson=xhttp.responseText;
        //chuyển về dữ liệU javascript
        var response= JSON.parse(ResponseJson);    
        if(xhttp.status==200){
            var s = document.getElementById('role');
            var s1= '';
            
            if (response[0]['idRole']==1){
                s1+='<li><a href="/setting">DUYỆT TRUYỆN</a></li>';
                s1+='<li><a href="/manage">QUẢN LÍ</a></li>';
                s1+='<li><a href="/historybrowser">LỊCH SỬ DUYỆT</a></li>';
            }
            else{
                s1+='<li><a href="/upstory">ĐĂNG TRUYỆN</a></li>';
                s1+='<li><a href="/readhistory">LỊCH SỬ ĐỌC</a></li>';
                s1+='<li><a href="/user">TÀI KHOẢN</a></li>';
            }
            s.innerHTML=s1;
            var s2 = document.getElementById('recommend');

                var s2Html='';
                for(var i =0;i<Response.length;i++)
                {
                    s2Html+='<a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a>';
                }
                s2.innerHTML = s2Html;
        }
 }
     //khai báo phương thức và đường dẫn để request
     xhttp.open("GET", "/apiV1/RoleByIdUser",false);
     //định dạng gửi đi787
     xhttp.setRequestHeader("Content-type","application/json")
     //
     xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
     xhttp.send();
}


function search(){
    if(event.keyCode==13){
        var s1 = document.getElementById('searchStory').value;
        
        window.location='/search/'+s1;
    }
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