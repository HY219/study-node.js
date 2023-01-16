function showLogMessage(msg) {

    console.log('--------------------------------')
    console.log(`로그메시지는: ${msg}`)
    console.log('--------------------------------')

}

module.exports.showLogMessage = showLogMessage

//moudle.exports.A = B
//B라는 함수를 logger.js파일(모듈) 바깥에서 A라는 이름으로 사용.

function showLogMessage2(msg) {

    console.log('--------------------------------')
    console.log(`로그메세지는: ${msg}`);
    console.log('--------------------------------')
}

const precious_value = 10;

//함수 여러개 추출 가능
//값 추출 가능
module.exports.showLogMessage2 = showLogMessage2
module.exports.pvalue = precious_value