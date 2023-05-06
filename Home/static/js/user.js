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
                var s1Html ='<tr id="username"><td>Tên tài khoản</td><td>'+Response.UserName+'</td><td class="setupproduct"><div class="editproduct" onclick="EditUserUserName()">Sửa</div></td></tr><tr id="email"><td>Email</td><td>'+Response.Email+'</td><td class="setupproduct"><div class="editproduct" onclick="EditUserEmail()">Sửa</div></td></tr><tr id="password"><td>Password</td><td>********</td><td class="setupproduct"><a href="/savepassword" class="editproduct">Sửa</a></td></tr>';
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/user",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();

}

function EditUserUserName(){
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
                var s1Html ='<tr><td>Tên tài khoản</td><td><input type="text" id="username" value="'+Response.UserName+'"></td><td class="setupproduct"><div class="edituser"><div onclick="SaveUserName()">Lưu</div>  </div><div class="clear"></div></td></tr><tr><td>Email</td><td>'+Response.Email+'</td><td class="setupproduct"><div onclick="EditUserEmail()" class="edituser">Sửa</div><div class="clear"></div></td></tr><tr><td>Password</td><td>********</td><td class="setupproduct"><a href="/savepassword" class="edituser">Sửa</a><div class="clear"></div></td></tr>';
                // for(var i=0;i<Response.length;i++){
                //     s1Html+='<tr><td>Tên tài khoản</td><td>'+Response.+'</td><td>'+Response[i]['UserName']+'</td><td>'+Response[i]['Email']+'</td><td class="setupproduct"><div class="editproduct"><a href="/EditUser">  Sửa </a></div><div class="deleteproduct" onclick="Delete('+Response[i]['id']+')">Xóa</div><div class="clear"></div></td></tr>';
                // }
                s1.innerHTML=s1Html;
            }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/user",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();
}

function EditUserEmail(){
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
            var s1Html ='<tr><td>Tên tài khoản</td><td>'+Response.UserName+'</td><td class="setupproduct"><div class="edituser"><div onclick="EditUserUserName()">  Sửa </div>  </div><div class="clear"></div></td></tr><tr><td>Email</td><td><input type="text" value="'+Response.Email+'"></td><td class="setupproduct"><div onclick="SaveEmail()" class="edituser">Lưu</div><div class="clear"></div></td></tr><tr><td>Password</td><td>********</td><td class="setupproduct"><a href="/savepassword" class="edituser">Sửa</a><div class="clear"></div></td></tr>';
            // for(var i=0;i<Response.length;i++){
            //     s1Html+='<tr><td>Tên tài khoản</td><td>'+Response.+'</td><td>'+Response[i]['UserName']+'</td><td>'+Response[i]['Email']+'</td><td class="setupproduct"><div class="editproduct"><a href="/EditUser">  Sửa </a></div><div class="deleteproduct" onclick="Delete('+Response[i]['id']+')">Xóa</div><div class="clear"></div></td></tr>';
            // }
            s1.innerHTML=s1Html;
        }
}
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/user",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();
}

function SaveUserName(){
    const xhttp =new XMLHttpRequest()
    var Username = document.getElementById('username').value;
    xhttp.onload = function(){
        if(xhttp.status==200){
            alert('Đã lưu thay đổi');
            window.location='/user';
        }
    }
    const postuser={
        userName:Username    
    }
    PostUser=JSON.stringify(postuser);
    //khai báo phương thức và đường dẫn để request
    xhttp.open("POST", "/apiV1/saveusername",false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
    //gửi
    xhttp.send(PostUser);
}

function SaveEmail(){
    const xhttp =new XMLHttpRequest()
    var email = document.getElementById('email').value;
    xhttp.onload = function(){
        if(xhttp.status==200){
            alert('Đã lưu thay đổi');
            window.location='/user';
        }
        else{
            alert('Email đã tồn tại')
        }
    }
    const postuser={
        email:email  
    }
    PostUser=JSON.stringify(postuser);
    //khai báo phương thức và đường dẫn để request
    xhttp.open("POST", "/apiV1/saveemail",false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
    //gửi
    xhttp.send(PostUser);
}