function Signup()
{
    /*
        Lấy giá trị trong element input với id là userName:
        - Có nhiều cách truy cập vào 1 element, 4 cách chính:
            +)getElementById():lấy bằng id
            +)getElementsByClassName():lấy bằng class
            +)getElementsByTagName(): tên thẻ
            +)querySelector() hoặc querySelectorAll(): lấy theo css selector
    */
    var userName = document.getElementById('userName').value;
    //  Lấy giá trị trong element input với id là password:
    var password = document.getElementById('password').value;
    //  Lấy giá trị trong element input với id là resetPassword
    var resetPassword = document.getElementById('resetPassword').value;
    var email = document.getElementById('EMAIL').value;
    //laasy element cos id la error__signup
    var errorSignup = document.getElementById('error__signup');
    
    if(userName==="")
    {
        //truỳen html vào element errorSignup
        errorSignup.innerHTML="<p>! Vui lòng nhập tên tài khoản</p>";
        
    }else if(password===""){
        //truỳen html vào element errorSignup
        errorSignup.innerHTML="<p>! Vui lòng nhập mật khẩu</p>";
    }else if(EMAIL===""){
        //truỳen html vào element errorSignup
        errorSignup.innerHTML="<p>! Vui lòng nhập địa chỉ email</p>";
    }else if(resetPassword===""){
        //truỳen html vào element errorSignup
        errorSignup.innerHTML="<p>! Vui lòng nhập lại mật khẩu</p>";
    }else{
        if(password!=resetPassword)
        {
        //truỳen html vào element errorSignup
            errorSignup.innerHTML="<p>! Nhập lại mật khẩu chưa chính xác</p>";

        }
        //khởi tạo đối tượng XMLHttpRequest dùng để gửi request
        const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
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
                window.location = "/index"
                
            }
            else
            {
                //vưới các status khác
                errorSignup.innerHTML='<p>'+Response['massage']+'</p>';
            }
        }         
        //khởi tạo biến dữ liệu
        const userInfo={
                username:userName,
                password:password,
                email:email
        }
        //chuyển sang dạng json để gửI đi trong body của request
        postUser=JSON.stringify(userInfo);
        //khai báo phương thức và đường dẫn để request
        xhttp.open("POST", "/apiV1/signup",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send(postUser);
    }
}