UpdateChapter();
function UpdateChapter(){
    const xhttp =new XMLHttpRequest()
    xhttp.onload = function(){
        var ResponseJson=xhttp.responseText;
        var response= JSON.parse(ResponseJson);
        if(xhttp.status==200){
            var s=document.getElementById('information');
            var s1='<div class="container__info__main"><h3>'+response.StoryName+
            '</h3><div class="container__info__left"><div class="container__info__e"><input type="text" id="status" placeholder="Trạng thái" value="'+response.status+
            '"></div><div class="container__info__e"><input type="text" id="chaptername" placeholder="" value="'+response.ChapterName+
            '"></div></div></div><div class="container__info__Chapter"><textarea id="content" name="description" rows="" cols="" placeholder="">'+response.Content+'</textarea></div><div class="container__info__Submit"><button onclick="UpdateSave()">LƯU THAY ĐỔI</button></div>';
            // window.location='/upstory';
            s.innerHTML=s1;
        }
    }
    
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/updatechapter/"+window.location.pathname.substring(15),false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //gửi
    xhttp.send();
}

function UpdateSave(){
    const xhttp =new XMLHttpRequest()
    var chaptername = document.getElementById('chaptername').value;
    var contentchapter = document.getElementById('content').value;
    var trangthai = document.getElementById('status').value;
    xhttp.onload = function(){
        if(xhttp.status==200){
            alert('Đã lưu thay đổi');
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
    xhttp.open("POST", "/apiV1/updatesave/"+window.location.pathname.substring(15),false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    // xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
    //gửi
    xhttp.send(PostChapter);
}
 
