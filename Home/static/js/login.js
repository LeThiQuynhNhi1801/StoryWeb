function Login()
{
    const xhttp = new XMLHttpRequest();
    var userName = document.getElementById('userName').value;
    //  Lấy giá trị trong element input với id là password:
    var password = document.getElementById('password').value;
    xhttp.onload = function()
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==201)
            {
                //vứi status =201 thành công
                // alert("thanh cong");
                localStorage.setItem('userID',Response['ID']);
                window.location = "/index";
            }
            else{
                var s = document.getElementById('Error')
                var s1 = '<p>'+Response["massage"]+'</p>';
                s.innerHTML = s1;
            }
        }     
        const userInfo={
            username:userName,
            password:password
        }
        postUser=JSON.stringify(userInfo);
        //khai báo phương thức và đường dẫn để request
        xhttp.open("POST","/apiV1/login",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send(postUser);    
}
// if(localStorage.getItem('userID') != null) window.location='/index';