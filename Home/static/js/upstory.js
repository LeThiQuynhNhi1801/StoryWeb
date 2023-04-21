Upstory();
function Upstory(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
{
    
    if(xhttp.status==200)
    {
            //lấy dữ liệu dạng json
        var responseJson=xhttp.responseText
        //chuyển về dữ liệU javascript
        var response= JSON.parse(responseJson)
        var s1 = document.getElementById('listStory');
        var s1Html ='';
        for(var i=0;i<response.length;i++){
            var a='';
            if(response[i]['check']==0){
                a+="Chưa được duyệt";
            }
            else{
                a+='Đã được duyệt ngày : '+response[i]['daybrowser'].substring(0,11);
            }
            s1Html+='<li><a href="/intro/'+response[i]['id']+'">'+response[i]['StoryName']+' :'+response[i]['count']+' chương'+'</a><a href="/writenewchapter/'+response[i]['id']+'">THÊM CHƯƠNG</a><a href="/listchapter/'+response[i]['id']+'">CHỈNH SỬA</a><p>'+a+'</p></li>';
        }
        s1.innerHTML=s1Html;
    }
    else 
    {
    }
}         
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/upstory",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();
}