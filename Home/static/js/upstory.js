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
            s1Html+='<li><a href="/intro/'+response[i]['id']+'">'+response[i]['StoryName']+'</a><button onclick="">THÊM CHƯƠNG</button></li>';
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