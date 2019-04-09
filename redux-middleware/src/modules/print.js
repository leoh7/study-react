// 비동기로 해야 할 작업이 많으면 코드 구조는 깊어지고 읽기 힘들다.
// 이른바 콜백지옥
function printLater(number, fn) {
  setTimeout(
    function() {
      console.log(number);
      if(fn) fn();
    },
    1 * 1000
  );
}

printLater(1, function() {
  printLater(2, function() {
    printLater(3, function() {
      printLater(4);
    })
  })
});

// Promise 로 문제를 해결, 코드 깊이는 일정하다.
// 결과 값을 반환할 때는 resolve(결과값)
// 오류를 발생시킬 때는 reject(오류)
// 이것들은 .then 혹은 .catch 에 전달하는 함수의 파라미터로 설정됨
function printLaterPromise(number) {
  return new Promise(
    resolve => {
      const timeout = 1 * 1000;
      setTimeout(() => {
        console.log(number);
        resolve();  // 결과 값
      }, timeout);
    }
  )
}

printLaterPromise(1)
  .then(() => printLaterPromise(2))
  .then(() => printLaterPromise(3))
  .then(() => printLaterPromise(4));

function printLaterPromiseAnother(number) {
  return new Promise(
    (resolve, reject) => {  // resolve와 reject를 파라미터로 받는다.
      if(number > 4) {
        return reject('number is greater than 4');
      } // reject는 오류를 발생시킴
      
      const timeout = 1 * 1000;
      setTimeout(
        () => {
          console.log(number);
          resolve(number + 1);
        }, timeout
      )
    }
  );
}

printLaterPromiseAnother(1)
  .then(num => printLaterPromiseAnother(num))
  .then(num => printLaterPromiseAnother(num))
  .then(num => printLaterPromiseAnother(num))
  .then(num => printLaterPromiseAnother(num))
  .catch(e => console.log(e));