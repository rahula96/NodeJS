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

타입스크립트 공식 웹사이트 플레이그라운드: https://www.typescriptlang.org/ko/play

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

> 비록 코드에 타입오류가 있지만 구문은 여전히 완벽하게 유효하다. 타입스크립트 컴파일러는 타입 오류와는 사왁ㄴ없이 입력 파일로부터 자바스크립트를 계속 생성한다.

> [1.5.1/index.ts](1.5.1/index.ts)

```ts
console.log("Nothing is worth more than laugher.");
```

#### 1.5.2 편집기 기능

