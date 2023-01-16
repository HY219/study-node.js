function showLogMessage(msg) {

    console.log('--------------------------------')
    console.log(`로그메시지는: ${msg}`)
    console.log('--------------------------------')

}

module.exports.showLogMessage = showLogMessage

//moudle.exports.A = B
//B라는 함수를 logger.js파일(모듈) 바깥에서 A라는 이름으로 사용.