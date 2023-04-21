ListChapter();
function ListChapter(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
            var ResponseJson=xhttp.responseText;
            //chuyển về dữ liệU javascript
            var response= JSON.parse(ResponseJson);
            if(xhttp.status=200){
                var s2= document.getElementById('strname');
                var s2html ='<a href="/intro/'+response[0]['ids']+'">'+response[0]['StoryName']+'</a>';
                var s = document.getElementById('listchapter');
                var s1 = '';
                for( var i=0;i<response.length;i++){
                    s1+='<li><a href="/read/'+response[i]['ids']+'/'+response[i]['ChapterNumber']+'">'+response[i]['ChapterName']+'</a><a href="/updatechapter/'+response[i]['id']+'">CHỈNH SỬA</a></li>';
                }
                s2.innerHTML=s2html;
                s.innerHTML=s1;
            }
        }
            //khai báo phương thức và đường dẫn để request
        xhttp.open("GET", "/apiV1/ListChapterByStoryID/"+window.location.pathname.substring(13),false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
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
