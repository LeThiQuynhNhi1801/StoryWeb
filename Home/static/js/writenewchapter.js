
function PostNewChapter(){
    const xhttp =new XMLHttpRequest()
    var chaptername = document.getElementById('chaptername').value;
    var contentchapter = document.getElementById('content').value;
    var trangthai = document.getElementById('status').value;
    xhttp.onload = function(){
        if(xhttp.status==200){
            window.location='/upstory';
        }
    }
    const postChapter={
        chapterP:chaptername,
        contentP:contentchapter,
        statusP:trangthai     
    }
    PostChapter=JSON.stringify(postChapter);
    //khai báo phương thức và đường dẫn để request
    xhttp.open("POST", "/apiV1/writenewchapter/"+window.location.pathname.substring(17),false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //gửi
    xhttp.send(PostChapter);
}

Nhi();
function Nhi(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
    {
        //lấy dữ liệu dạng json
        var ResponseJson=xhttp.responseText
        //chuyển về dữ liệU javascript
        var Response= JSON.parse(ResponseJson)
        if(xhttp.status==200)
        {
            alert('hihi');
            var a=0;
            for(var i=0;i<Response.length;i++){
                if(Response[i].id==window.location.pathname.substring(17)){
                    a=i;
                    break;
                }
            }
            var s1 = document.getElementById('information');
            var s1Html='<div class="container__info__main"><h3>'+Response[a]['StoryName']+'</h3><div class="container__info__left"><div class="container__info__e"><input type="text" id="status" placeholder="Trạng thái"></div><div class="container__info__e"><input type="text" id="chaptername" placeholder="Tên chương '+(Response[a]['count']+1)+' :"></div></div></div><div class="container__info__Chapter"><textarea id="content" name="description" rows="" cols="" placeholder="Nội dung chương '+(Response[a]['count']+1)+'"></textarea></div><div class="container__info__Submit"><button onclick="PostNewChapter()">ĐĂNG</button></div>';
            s1.innerHTML = s1Html;
        }
        else
        {
           
        }
    }         
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/upstory",false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //gửi
    xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
    xhttp.send();
}
