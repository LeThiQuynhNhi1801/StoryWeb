const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200)
            {
                var s = document.getElementById('top');

                var sHtml='<div class="body__hot__hotlist"><a href="hot">TRUYỆN HOT</a></div><div class="body__hot__top"> <a href="intro/'+Response[1]['id']+'"><img src="'+Response[1]['CoverImage']+'" alt=""></a> <a href="intro/'+Response[1]['id']+'">Top 2: '+Response[1]['StoryName']+
                '</a></div><div class="body__hot__top"><a href="intro/'+Response[0]['id']+'"><img src="'+Response[0]['CoverImage']+'" alt=""></a><a href="intro/'+Response[0]['id']+'">Top 1: '+Response[0]['StoryName']+
                '</a></div><div class="body__hot__top"><a href="intro/'+Response[2]['id']+'"><img src="'+Response[2]['CoverImage']+'" alt=""></a> <a href="intro/'+Response[2]['id']+'">Top 3: '+Response[2]['StoryName']+'</a></div>';
                s.innerHTML = sHtml;
                
            }
            else
            {
               
            }
        }         
        //khai báo phương thức và đường dẫn để request
        xhttp.open("GET", "/apiV1/hot",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send();

    

//nhận dự liệu về (http response)
xhttp.onload = function() 
{
    
    if(xhttp.status==200)
    {
            //lấy dữ liệu dạng json
        var responseJson=xhttp.responseText
        //chuyển về dữ liệU javascript
        var response= JSON.parse(responseJson)
        var s1 = document.getElementById('recommend');
        var s1Html ='<h1>Có thể bạn thích ? </h1>';
        for(var i=0;i<response.length;i++){
            s1Html+='<a href="/intro/'+response[i]['id']+'">'+response[i]['StoryName']+'</a>';
        }
        s1.innerHTML=s1Html;
    }
    else if(xhttp.status==204)
    {
        HotRCM();
    }
}         
//khai báo phương thức và đường dẫn để request
xhttp.open("GET", "/apiV1/StoryByIdUser",false);
//định dạng gửi đi787
xhttp.setRequestHeader("Content-type","application/json")
xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
//gửi
xhttp.send();

function HotRCM()
{
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function() 
        {
            //lấy dữ liệu dạng json
            var ResponseJson=xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response= JSON.parse(ResponseJson)
            if(xhttp.status==200)
            {
                var s2 = document.getElementById('recommend');

                var s2Html='';
                for(var i =0;i<Response.length;i++)
                {
                    s2Html+='<a href="/intro/'+Response[i]['id']+'">'+Response[i]['StoryName']+'</a>';
                }
                s2.innerHTML = s2Html;
            }
            else
            {
               
            }
        }         
        //khai báo phương thức và đường dẫn để request
        xhttp.open("GET", "/apiV1/hot",false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type","application/json")
        //gửi
        xhttp.send();
}

