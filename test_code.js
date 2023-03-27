function print(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
// n을 입력하면 0부터 n까지 출력해주는 함수 - commit 1
// ...
// ...
// ...
// 기능추가

function printOdd(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
// n을 입력하면 0부터 n까지 숫자중 홀수를 출력해주는 함수 - commit 2

// 홀수들의 합을 구하는 기능을 만들기 위해 branch 개설
