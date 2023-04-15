List();
function List(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200){
                var s1= document.getElementById('listStory');
                var s1Html ='';
                for(var i=0;i<Response.length;i++){
                    s1Html+='<li><a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a><button onclick="Delete('+Response[i]['id']+')">XOÁ</button></li>';
                }
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/listStory",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
//gửi
xhttp.send();

}

function Delete(a){
    const xhttp = new XMLHttpRequest();
    //nhận dự liệu về (http response)
    xhttp.onload = function() 
    {
        //lấy dữ liệu dạng json
        // var ResponseJson=xhttp.responseText
        // //chuyển về dữ liệU javascript
        // var Response= JSON.parse(ResponseJson)
        if(xhttp.status==204){
            List();
        }
    }
    //khai báo phương thức và đường dẫn để request
    xhttp.open("DELETE", "apiV1/delete/"+a,false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //
    xhttp.send();
}
