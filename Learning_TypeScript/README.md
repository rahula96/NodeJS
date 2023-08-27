# Learning TypeScript

## Chapter 1

### 1.1 자바스크립트의 역사

### 1.2 바닐라 자바스크립트의 함정

바닐라(Vanilla): 중요한 언어 확장이나 프레임워크 없이 자바스크립트를 사용, 순수한 자바스크립트를 의미

#### 1.2.1 값 비싼 자유

#### 1.2.2 부족한 문서

#### 1.2.3 부족한 개발자 도구

### 1.3 타입스크립트

개발 책임자: 이네르스 하일스베르

- 프로그래밍 언어: 자바스크립트의 모든 구문과 타입을 정의하고 사용하기 위한 새로운 타입스크립트 고유 구문이 포함된 언어
- 타입 검사기: 자바스크립트 및 타입스크립트로 작성된 일련의 파일에서 생성된 모든 구성요소(변수, 함수 등)을 이해하고, 잘못 구성된 부분을 아렬주는 프로그램
- 컴파일러: 타입 검사기를 실행하고 문제를 보고한 후 이에 대응되는 자바스크립트 코드를 생성하는 프로그램
- 언어 서비스: 타입 검사기를 사용해 비주얼 스튜디오 코드와 같은 편집기에 개발자에게 유용한 유틸리 제공법을 알려주는 프로그램

### 1.4 타입스크립트 플레이그라운드에서 시작하기

타입스크립트 공식 웹사이트 플레이그라운드: [https://www.typescriptlang.org/ko/play](https://www.typescriptlang.org/ko/play)

#### 1.4.1 타입스크립트 실정

#### 1.4.2 제한을 통한 자유

#### 1.4.3 정확한 문서화

#### 1.4.4 더 강력한 개발자 도구

#### 1.4.5 구문 컴파일 하기

### 1.5 로컬에서 시작하기

컴퓨터에 Node.js가 설치되어 있으면 타입스크립트를 실행할 수 있다. 타입 스크립트 최신 버전을 전역으로 설치하려면 다음 명령어를 실행

```text
sudo npm i -g typescript
```

타입스크립트를 설치할 때의 최신 버전이 Version X.Y.Z와 같은 형식으로 출력된다.

```text
geayoungbaek@geayoungui-MacBookPro Learning_TypeScript % tsc --version           
Version 5.1.6
```

#### 1.5.1 로컬에서 실행하기

컴퓨터 아무 곳에나 폴더를 만들고 다음 명령어를 실행해 신규 `tsconfig.json` 구성 파일을 생헌다.

```text
geayoungbaek@geayoungui-MacBookPro 1.5.1 % tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

`tscofnig.json` 파일은 타입스크립트가 코드를 분석할 때 사용하는 설정을 선언

> [1.5.1/index_error.ts](1.5.1/index_error.ts)

```ts
console.blub("Nothing is worth more than laugher.");
```

컴파일 에러

```text
geayoungbaek@geayoungui-MacBookPro 1.5.1 % tsc index.ts 
index.ts:1:9 - error TS2339: Property 'blub' does not exist on type 'Console'.

1 console.blub("Nothing is worth more than laugher.");
          ~~~~


Found 1 error in index.ts:1
```

실제로 blub는 console에 존재히지 않는다.

타입스크립트를 정상적으로 작동시키기 위해 tsc가 console.blub를 포함해 index.js를 생성한다.

비록 코드에 타입오류가 있지만 구문은 여전히 완벽하게 유효하다. 타입스크립트 컴파일러는 타입 오류와는 사왁ㄴ없이 입력 파일로부터 자바스크립트를 계속 생성한다.

> [1.5.1/index.ts](1.5.1/index.ts)

```ts
console.log("Nothing is worth more than laugher.");
```

#### 1.5.2 편집기 기능

### 1.6 타입스크립에 대한 오해

#### 1.6.1 잘못된 코드 해결책

#### 1.6.2 자바스크립트로의 확장

타입스크립트의 설계 목표

- 현재와 미래의 ECMA 스크립ㄴ트 제안을 맞춘다.
- 모든 자바스크립트 코드의 런타임 동작을 유지 한다.

#### 1.6.3 자바스크립트보다 느림

타입스크립트는 코드를 빌드하는데 시간이 조금 더 걸린다. 타입스크립트 코드는 브라우저나 Node.js와 같은 환경에서 실행되기 전에 자바스크립트로 컴파일 되어야 한다.

> ts-node: Node.js에서 타입스크립트를 실행시키는 도구

#### 1.6.4 진화가 끝남

### 1.7 마치며

## Chapter 2 타입 시스템

### 2.1 타입의 종류

'타입'은 자바스크립트에서 다루는 값의 형태에 대한 설명
'형태'란 값에 존재하는 속성과 메서드 그리고 내장되어 있는 typeof 연산자가 설명하는 것

자바스크립트의 일곱 가지 기본 원시 타입(primitive type)

- null
- undefined
- bool // true 혹은 false
- string // "", "Hi1", "abcd123", ...
- number // 0, 2.1, -4, ...
- bigint // 0n, 2n, -4n, ...
- symbol // Symbol(), Symbol("hi"), ...

타입스크립트는 다음 값을 일곱가지 기본 원시 타입중 하나로 간주

- null; // null
- undefined; // undefined
- true; // boolean
- "Louise"; // string
- 1337; // number
- 1337n; // bigint
- Symbol("Franklin"); // symbol

```text
npm install -g ts-node
```

> [2.1/type_string.ts](2.1/type_string.ts)

```ts
// 타입: string
let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect"
console.log(bestSong);
```

#### 2.1.1 타입 시스템

#### 2.1.2 오류 종류

- 구문 오류: 타입스크립트가 자바스크립트로 변환되는 것을 차단한 경우
- 타입 오류: 타입 검사기에 따라 일치하지 않는 것이 감지된 경우

### 2.2 할당 가능성

할당 가능성: 타입스크립트에서 함수 호출이나 변수에 값을 제공할 수 있는지 여부를 확인하는 것

#### 2.2.1 할당 가능성 오류 이해하기

### 2.3 타입 애너테이션

타입 애너테이션(type annotation): 타입스크립트는 초깃값을 할당하지 않고도 변수의 타입을 선언할 수 있는 구문

```ts
let rocker: string;
rocker = "joan Jett";
```

#### 2.3.1 불필요한 타입 애너테이션

### 2.4 타입 형태

#### 2.4.1 모듈

ECMA 스크립트 사양과 일치시키기 위한 명명법

- 모듈: export 또는 imort가 있는 파일
- 스크립트: 모듈이 아닌 모든 파일

### 2.5 마치며

## Chapter 3 유니언과 리터럴

- 유니언(union): 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
- 내로잉(narrowing): 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

### 3.1 유니언 타입

#### 3.1.1 유니언 타입 선언

#### 3.1.2 유니언 속성

### 3.2 내로잉

#### 3.2.1 값 할당을 통한 내로잉

#### 3.2.2 조건 검사를 통한 내로잉

#### 3.2.3 typeof 검사를 통한 내로잉

### 3.3 리터럴 타입

#### 3.3.1 리터럴 할당 가능성

### 3.4 엄격한 null 검사

#### 3.4.1 십억 달러의 실수

#### 3.4.2 참 검사를 통한 내로잉

#### 3.4.3 초깃값이 없는 변수

### 3.5 타입 별칭

#### 3.5.1 타입 별칭은 자바스크립트가 아니다

타입 별칭은 타입 애너테이션 처럼 자바 스크립트로 컴파일 되지 않는다.

타입 별칭은 순전히 '개발 시'에만 존재한다.

#### 3.5.2 타입 별칭 결합

### 3.6 마치며

## 4 객체

### 4.1 객체 타입

#### 4.1.1 객체 타입 선언

#### 4.1.2 별칭 객체 타입

### 4.2 구조적 타이핑

- 덕 타이핑(duck typing): 동적 타이핑의 한 종류로 객체의 변수 및 메서드의 집합이 객체의 타입을 결정한느 것
- 구조적으로 타입화(structurally typed): 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있다.

- 타입스크립트의 타입 검사기에서 구조적 타이핑은 정적 시스템이 타입을 검사하는 경우
- 덕 타이핑은 런타임에서 사용될 때까지 객체 타입을 검사하지 않는 것

자바스크립트는 덕 타입, 타입스크립트는 구조적으로 타입화

#### 4.2.1 사용 검사

#### 4.2.2 초과 속성 검사

#### 4.2.3 중첩된 객체 타입

#### 4.2.4 선택적 속성

`?`를 사용해 선택적으로 선언된 속성은 존재하지 않아도 된다.

### 4.3 객체 타입 유니언

#### 4.3.1 유추된 객체 타입 유니언

#### 4.3.2 명시된 객체 타입 유니언

#### 4.3.3 객체 타입 내로잉

#### 4.3.4 판별된 유니언

### 4.4 교차 타입

#### 4.4.1 교차 타입의 위험성

never 키워드와 never 타입은 프로그래밍 언어에서 bottom 타입 또는 empty 타입을 뜻한다.

### 4.5 마치며

## Chapter 5 함수

### 5.1 함수 매개변수

#### 5.1.1 필수 매개변수

#### 5.1.2 선택적 매개변수

타입 애너테이션의 `:` 앞에 `?`를 추가해 매개변수가 선택적이라고 표시한다.

