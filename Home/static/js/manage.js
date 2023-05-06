ListUser();
function ListUser(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200){
                var s1= document.getElementById('add');
                var s1Html ='';
                for(var i=0;i<Response.length;i++){
                    s1Html+='<tr><td>'+(i+1)+'</td><td>'+Response[i]['id'] +'</td><td>'+Response[i]['UserName']+'</td><td>'+Response[i]['Email']+'</td><td class="setupproduct"><div class="deleteproduct" onclick="Delete('+Response[i]['id']+')">Xóa</div><div class="clear"></div></td></tr>';
                }
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/manage",false);
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
            alert('Đã xóa User')
            ListUser();
        }
    }
    //khai báo phương thức và đường dẫn để request
    xhttp.open("GET", "apiV1/deleteuser/"+a,false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    //
    xhttp.send();
}

