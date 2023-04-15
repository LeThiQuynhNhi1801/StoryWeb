Read();
function Read(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
            var ResponseJson=xhttp.responseText;
            //chuyển về dữ liệU javascript
            var response= JSON.parse(ResponseJson);
            if(xhttp.status==200){
                var s = document.getElementById('container');
                var s1 = '<div class="container__tiltle"><a href="/intro/'+response.id+'">'+response.StoryName+'</a><a href="">Chương : '+response.ChapterNumber+'</a><div class="container__tiltle__choosechapter"><div class="tiltle__choosechapter__beaf"><a href="'+(response.ChapterNumber-1)+'">Chương trước</a></div><div class="tiltle__choosechapter__list"><i class="fas fa-list-alt"></i></div><div class="tiltle__choosechapter__beaf"><a href="'+(response.ChapterNumber+1)+'">Chương sau</a></div></div></div><div class="container__content"><p>'+response.Content+'</p></div><div class="container__tiltle"><div class="container__tiltle__choosechapter"><div class="tiltle__choosechapter__beaf"><a href="'+(response.ChapterNumber-1)+'">Chương trước</a></div><div class="tiltle__choosechapter__list"><i class="fas fa-list-alt"></i></div><div class="tiltle__choosechapter__beaf"><a href="'+(response.ChapterNumber+1)+'">Chương sau</a></div></div></div>';
                s.innerHTML=s1;
            }
        } 
        //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/read/"+window.location.pathname.substring(6),false);
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