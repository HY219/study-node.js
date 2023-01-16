var http = require('http');
var fs = require('fs'); //FileSystem -> 파일처리와 관련된 모듈
//var url = require('url'); // 'url모듈'을 'url변수'를 통해 사용할 것이다. //'url'모듈을 요구한다. // node js가 갖고 있는 수 많은 기능들을 비슷한 것끼리 엮어 그룹핑하는 것 = 모듈

var app = http.createServer(function(request,response){
    var _url = request.url; //request.url에 쿼리스트링 값이 반영됨. //url안에 있는 값을 추출함으로서 우리가 원하는 값을 얻어낼 수 있다. -> url로 부터 url을 분석해서 데이터를 추출해야한다. 
    //var queryData = url.parse(_url, true).query; //쿼리 데이터라는 변수에 담겨있는 데이터가 객체이다. //nodejs url parse query string -> url을 쿼리스트링으로 파싱해준다....?
    //console.log(queryData.id);

    //요청받은 url이 '/'이면, 응답할 url을 'index.html'로 지정
    console.log(_url);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //console.log(__dirname + url); //현재 파일이 위치하고 있는 디렉토리+페이지에 접근할 때 요청된 url
    response.end(fs.readFileSync(__dirname + _url)); //읽어들여야될 파일을 읽는다. //사용자에게 전송할 데이터를 생성한다.
    //response.end('egoing : '+url); //사용자에게 전송할 데이터를 생성한다. <- response.end
 
});
app.listen(8000); //localhost:8000 (터미널에 'node main.js' 입력 후 홈페이지에 'localhost:8080' -> 페이지 뜸) //'ctrl+c'누르면 서버 접속 꺼짐
//node.js는 웹서버로서 동작하고있음.