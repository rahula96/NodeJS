Javascript Intermediate Class
=====

https://www.youtube.com/playlist?list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4

### 자바스크립트 중급 강좌 #1 - 변수, 호이스팅, TDZ(Temporal Dead Zone) : https://youtu.be/ocGc-AmWSnQ


**호이스팅** : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

- let
- const 
- var
    - 한번 선언된 변수를 다시 선언할 수 있다.
    - 선언하기 전에 사용할 수 있다.

#### 변수의 생성과정
1. 선언단계
1. 초기화 단계
1. 할당 단계


- var
    1. 선언 및 초기화 단계
    2. 할당 단계

- let
    1. 선언단계
    2. 초기화 단계
    3. 할당 단계

- const
    1. 선언 + 초기화 + 할당

#### 스코프
- var : 함수 스코프(function-scoped)
- let, const : 블록 스코프(block-scoped)


### 자바스크립트 중급 강좌 #2 - 생성자 함수 : https://youtu.be/8hrSkOihmBI
- 첫 글자는 대문자로
- new 연산자를 사용해서 호출

실습 : Javascript_Intermediate/test_02.js

### 자바스크립트 중급 강좌 #3 - 객체 메소드(Object methods), 계산된 프로퍼티(Computed property) : https://youtu.be/6NZpyA64ZUU

실습 : Javascript_Intermediate/test_03.js

### 자바스크립트 중급 강좌 #4 - 심볼(Symbol) : https://youtu.be/E9uCNn6BaGQ

- 유일한 식별자를 만들때 사용
- 전역 심볼 : Symbol.for()
    - 하나의 심볼만 보장 받을 수 있음
    - 없으면 만들고, 있으면 가져오기 때문
    - Symbol함수는 매번 다른 Symbol값을 생성하지만,
    - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

실습 : Javascript_Intermediate/test_04.js

### 자바스크립트 중급 강좌 #5 - 숫자, 수학 method (Number, Math) : https://youtu.be/ZI6TT93wggA

### 자바스크립트 중급 강좌 #6 - 문자열 메소드(String methods) : https://youtu.be/G360D6lqrfo

실습 : Javascript_Intermediate/test_06.js

### 자바스크립트 중급 강좌 #7 - 배열 메소드1(Array methods) : https://youtu.be/pJzO6O-aWew

- Array
    - push() : 뒤에 삽입
    - pop() : 뒤에 삭제
    - unshift() : 앞에 삽입
    - shift() : 앞에 삭제

실습 : Javascript_Intermediate/test_07.js


### 자바스크립트 중급 강좌 #8 - 배열 메소드2 (sort, reduce) : https://youtu.be/RW25tEAMC9w

실습 : Javascript_Intermediate/test_08.js

https://lodash.com/ : A modern JavaScript utility library delivering modularity, performance & extras.

### 자바스크립트 중급 강좌 #9 구조 분해 할당 (Destructuring assignment) : https://youtu.be/lV7ulA7R5Nk

Destructuring assignment : 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

### 자바스크립트 중급 강좌 #10 나머지 매개변수, 전개 구문(Rest parameters, Spread syntax) : https://youtu.be/lekNM8ldxno

실습 : Javascript_Intermediate/test_10.js

### 자바스크립트 중급 강좌 #11 클로저(Closure) 5분만에 이해하기 : https://youtu.be/tpl2oXQkGZs

### 자바스크립트 중급 강좌 #12 setTimeout / setInterval : https://youtu.be/nwk_aNbFEEc

실습 : Javascript_Intermediate/test_12.js

### 자바스크립트 중급 강좌 #13 call, apply, bind : https://youtu.be/KfuyXQLFNW4

> call
> - call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
> - 실습 : Javascript_Intermediate/test_13.js

> apply
> - apply는 함수 매개변수를 처리하는 방법을 제외함녀, call과 완전히 같습니다.
> - call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.
> - 실습 : Javascript_Intermediate/test_13_1.js

> bind
> - 함수의 this값을 영구히 바꿀 수 있습니다.
> - 실습 : Javascript_Intermediate/test_13_2.js

### 자바스크립트 중급 강좌 #14 상속, 프로토타입(Prototype) : https://youtu.be/ddJcDZHBRm0

- 실습 : Javascript_Intermediate/test_14.js

### 자바스크립트 중급 강좌 #15 클래스(Class) : https://youtu.be/OpvtD7ELMQo

- ES6에 추가된 스펙

### 자바스크립트 중급 강좌 #16 프로미스(Promise) : https://youtu.be/3Ao3OroqQLQ

- 실습 : Javascript_Intermediate/test_16.js

### 자바스크립트 중급 강좌 #17 async, await : https://youtu.be/Uh8u20MD978

- 실습 : Javascript_Intermediate/test_17_2.js

### 자바스크립트 중급 강좌 #18 Generator : https://youtu.be/qi24UqyJLgs
- Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
- 실습 : Javascript_Intermediate/test_18.js

