const express = require('express'); //express라는 모듈은 우리가 이미 다운 받았다. //npm install express --save //--save : package.json에 다운받은 것을 저장해라. //package-lock.json : 현재 다운 받은 버전을 모두 저장 //package.json : 가장 최신버전을 가져옴. //expressjs.com
const app = express(); //express라는 함수를 실행시켜줌.

//서버 만들기 //포트번호, 콜백함수
app.listen(3000, () => {
    console.log('누군가 연락했다.'); //서버가 호출됐을 때 어떤 액션을 취할 것인가.
})