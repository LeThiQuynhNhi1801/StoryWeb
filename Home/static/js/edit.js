
function setpassword(){
    const xhttp =new XMLHttpRequest()
    var old = document.getElementById('oldpassword').value;
    var newpass = document.getElementById('newpassword').value;
    var pass = document.getElementById('password').value;
    var errorSignup = document.getElementById('error__signup');
    xhttp.onload = function(){
        var ResponseJson=xhttp.responseText;
        var Response= JSON.parse(ResponseJson);
        if(xhttp.status==200){
            alert('Thay đổi mật khẩu thành công')
            window.location = '/user';
        }
        else
        {
            //vưới các status khác
            errorSignup.innerHTML='<p>'+Response['message']+'</p>';
        }
    }
    const postpass={
        oldpassword:old,
        newpassword:newpass,
        password:pass     
    }
    PostPassword=JSON.stringify(postpass);
    //khai báo phương thức và đường dẫn để request
    xhttp.open("POST", "/apiV1/savepassword",false);
    //định dạng gửi đi787
    xhttp.setRequestHeader("Content-type","application/json")
    xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
    //gửi
    xhttp.send(PostPassword);
}