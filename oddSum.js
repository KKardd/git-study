function oddSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}
// 홀수들의 합을 구해 return 해주는 기능 우여곡절 끝에 개발
// 개발이 완료되었으니 oddSum branch에서 commit (commit 2-1)
// 기능개발이 완료되었으니 main branch에 merge
