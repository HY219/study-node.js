var http = require('http'); 
var url = require('url'); //url모듈을 url변수로 가져와서 사용한다.
var fs = require('fs');
var qs = require('querystring');

//서버 생성 및 제어
var app = http.createServer(function(request, response){
		var _url = request.url; 
    //var url_list = url.parse(_url, true);
    //console.log(url_list);  //url에 들어있는 정보들 출력
    var queryData = url.parse(_url, true).query; //queryData는 객체이다.({}로 출력되는 것을 보고 알 수 있음)
		var title = queryData.id; //console.log(queryData.id); // '?id='뒷부분을 객체로 출력
    var pathname = url.parse(_url, true).pathname;
    //console.log(_url);      //?id=HTML
    //console.log(queryData); // { id : 'HTML' }
    //console.log(title);     // HTML
    //console.log(pathname);  // /

    var querystring = qs.parse(_url);
    console.log(querystring); //{ '/?id' : 'HTML' }
        
        if(pathname === '/' ){ //이 조건문내에서 작성해서 등록해둔 주소(pathname)가 아니면 에러를 일으키는 듯?
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
        response.writeHead(200); //웹서버에서 웹브라우저로 200을 전송해주면, 파일을 성공적으로 보냈다고 알려주는 것(약속)
        response.end(template); 
		    });
        }
        else {
          response.writeHead(404); //웹서버에서 웹브라우저로 404를 전송해주면, 파일이 없다고 알려주는 것.(약속)
          response.end("Not found");
        }

        
        });

app.listen(4000);