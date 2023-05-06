ListHistory();
function ListHistory(){
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
                    s1Html+='<li><a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a><button onclick="Delete('+Response[i]['id']+')">XOÁ</button><p>Đã duyệt ngày : '+Response[i]['daybrowser'].substring(0,11)+'</p></li>';
                }
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/historybrowser",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
//gửi
xhttp.send();

}
ListHistory2();
function ListHistory2(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200){
                var s1= document.getElementById('listStorydelete');
                var s1Html ='';
                for(var i=0;i<Response.length;i++){
                    s1Html+='<li><a>'+Response[i]['StoryName']+'</a><button onclick="Delete2('+Response[i]['id']+')">XOÁ VĨNH VIỄN</button><button onclick="restore('+Response[i]['id']+')">KHÔI PHỤC</button><p>Đã xoá ngày : '+Response[i]['daybrowser'].substring(0,11)+'</p></li>';
                }
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/listdelete",false);
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
            alert('Xóa thành công')
            ListHistory();
            ListHistory2();
        }
    }
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "apiV1/delete/"+a,false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //
    xhttp.send();
}
function Delete2(a){
    const xhttp = new XMLHttpRequest();
    //nhận dự liệu về (http response)
    xhttp.onload = function() 
    {
        //lấy dữ liệu dạng json
        // var ResponseJson=xhttp.responseText
        // //chuyển về dữ liệU javascript
        // var Response= JSON.parse(ResponseJson)
        if(xhttp.status==204){
            alert('Xóa thành công')
            ListHistory();
            ListHistory2();
        }
    }
    //khai báo phương thức và đường dẫn để request
    xhttp.open("DELETE", "apiV1/delete2/"+a,false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //
    xhttp.send();
}
function restore(a){
    
    const xhttp = new XMLHttpRequest();
    //nhận dự liệu về (http response)
    xhttp.onload = function() 
    {
        //lấy dữ liệu dạng json
        // var ResponseJson=xhttp.responseText
        // //chuyển về dữ liệU javascript
        // var Response= JSON.parse(ResponseJson)
        if(xhttp.status==204){
            alert('Khôi phục thành công')
            ListHistory();
            ListHistory2();
        }
    }
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "/apiV1/restore/"+a,false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //
    xhttp.send();
}