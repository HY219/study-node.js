// console.log('hello, node js'); //터미널에 'node app.js' 입력 -> 실행됨.

// 함수
function sayHello(name){
    console.log('Hello '+name)
}

sayHello('John');
sayHello('Alice');

// if문
const v = 10;

if(v > 5){
    console.log('It is a big number');
}
else{
    console.log('난 작은 숫자야!!')
}

//setInterval //일정 주기마다 자동 실행되도록 //3초에 한번씩 실행  
setInterval(()=> {
    console.log('Node js 연습중입니다...');
}, 3000);

//setTimeout //3초 후 한번만 실행
setTimeout(()=>{
    console.log('타임아웃, 한 번만 실행');
}, 3000);

//Module
//함수, 라이브러리