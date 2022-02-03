var http = require('http'); 
var url = require('url'); //url모듈을 url변수로 가져와서 사용한다.
var fs = require('fs');

//서버 생성 및 제어
var app = http.createServer(function(request, response){
		var _url = request.url; 
        var queryData = url.parse(_url, true).query; //queryData는 객체이다.({}로 출력되는 것을 보고 알 수 있음)
		var title = queryData.id; //console.log(queryData.id); // '?id='뒷부분을 객체로 출력
        
        if(_url == '/'){         //첫페이지
            title = 'Welcome';
        }

        fs.readFile(`data/${title}`,`utf8`, function(err, description){
            //var description = data;
            var template = `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>`;

        response.end(template); 
		    });
        })

app.listen(4000);