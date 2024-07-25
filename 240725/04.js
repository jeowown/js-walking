// 문제 2번의 사자 객체를 가져옵니다.
// const lion = { ... }

const lion = {
    name: "심바",
    age: 3,
    주인공: true,
    대사: "하쿠나마타타"
}


// 나이를 추가하는 함수입니다.
function incrementAge(lion, x) {
    lion.age = lion.age + x;
    return lion;
}


// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion, 3));
console.log(incrementAge(lion, 3));
console.log(incrementAge(lion, 3));


// 1. 실습 문제 2번에서 작성한 `lion` 객체를 다시 사용합니다.
// 2. `incrementAge` 함수의 내용을 채워주세요.
//     1. 사자 객체의 나이를 **1** 더해줍니다.
//     2. 변경된 사자 객체를 반환합니다.