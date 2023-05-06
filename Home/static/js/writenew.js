function upnewStory(){
    const xhttp = new XMLHttpRequest();
    var strn = document.getElementById('storyName').value;
    var athor = document.getElementById('author').value;
    var nguon = document.getElementById('source').value;
    var tthai = document.getElementById('status').value;
    var mota = document.getElementById('description').value;
    var tenchuong1 = document.getElementById('chapter1').value;
    var noidung = document.getElementById('content').value;
    var anhbia = document.getElementById('coverimg');
    var theloaiElement = document.getElementsByName('type');
    var theloai =[];
    for(var i=0; theloaiElement[i]; ++i){
        if(theloaiElement[i].checked){
            theloai.push(theloaiElement[i].value);
             
        }
  }
  alert(theloai)
  
   
    // Lấy đối tượng input chứa hình ảnh

    var file = anhbia.files[0];

// Tạo đối tượng FileReader để đọc file hình ảnh
    var reader = new FileReader();
    reader.onloadend = function() {
        // Chuyển đổi file hình ảnh thành Base64 string
        var base64String = reader.result.split(',')[1];

        // Tạo đối tượng JSON chứa dữ liệu hình ảnh
       

        // Tạo yêu cầu AJAX với dữ liệu hình ảnh dưới dạng JSON
        var xhr = new XMLHttpRequest();
        xhttp.onload = function(){
            if(xhttp.status==200){
                alert('Đăng thành công')
               window.location='/upstory';
            }
        }
        const userInfo={
            category:theloai,
            coverimg    : base64String,
            storyName:strn, 
            author: athor,
            source:nguon,
            status:tthai,
            description:mota,
            chapter1:tenchuong1,
            content:noidung, 
            filename: file.name,
        }
        postUser=JSON.stringify(userInfo);

        // Gửi yêu cầu AJAX với dữ liệu hình ảnh dưới dạng JSON
 
        
            //khai báo phương thức và đường dẫn để request
            xhttp.open("POST", "/apiV1/writenew",false);
            //định dạng gửi đi787
            xhttp.setRequestHeader("Content-type","application/json")
            xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
            //gửi
            xhttp.send(postUser);
    };
    reader.readAsDataURL(file);
}