// 재시도

function print(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
// n을 입력하면 0부터 n까지 출력해주는 함수 - commit 1

function printOdd(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
// n을 입력하면 0부터 n까지 숫자중 홀수를 출력해주는 함수 - commit 2

// 홀수들의 합을 구하는 기능을 만들기 위해 Odd branch 개설

function EvenSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// 그 도중 다른 기능(짝수들의 합을 구하는 기능)은 메인 branch에서 개발 commit 3
// merge 테스트 - end
