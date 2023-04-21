list();
function list(){
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
                var s1 = document.getElementById('categoryName');
                var s1Html='<div class="body__hot__hotlist"><a href="hot">'+Response[0]['CategoryName']+'</a></div>';
                var s2 =document.getElementById('listStory');
                var s2Html = '';
                for(var i =0;i<Response.length;i++)
                {
                    s2Html+=' <li><a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a></li>';
                }
                s1.innerHTML = s1Html;
                s2.innerHTML = s2Html;
                
            }
            else
            {
               
            }
        }         
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/StoryByIDCategory/"+window.location.pathname.substring(6),false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
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
        xhttp.open("GET", "/apiV1/StoryByIdUser",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
        //gửi
        xhttp.send();
}
// if(localStorage.getItem('userID')==null){
//     window.location='/login';
// } else{
//     userID=null;
//     var a=document.getElementById('signup');
//     var a1='<a href="login" oncick="logout()">ĐĂNG XUẤT<i class="fas fa-user"></i></a>';
//     a.innerHTML=a1;
// }
// function logout(){
//     window.localStorage.removeItem('userID');
// } 
