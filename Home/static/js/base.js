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
                s1+='<li><a href="/setting">CÀI ĐẶT</a></li>';
                s1+='<li><a href="/upstory">ĐĂNG TRUYỆN</a></li>';
            }
            else{
                s1+='<li><a href="/upstory">ĐĂNG TRUYỆN</a></li>';
            }
            s.innerHTML=s1;
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