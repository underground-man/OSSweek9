# 영화 관리 서비스

Fetch API와 MockAPI를 이용하여 영화 정보를 등록, 조회, 수정, 삭제하는 Vanilla JavaScript CRUD 서비스입니다.

## Deployment

- GitHub: https://github.com/2026-2-OSS/assign09-c02-22300330
- Vercel: 배포 후 입력
- MockAPI Endpoint: https://6ae2c648bbb54129229a614e.mockapi.io/movies

## Service

### 주제

영화 정보 관리

### 데이터 Field

- `id`: MockAPI에서 자동으로 생성하는 식별자
- `title`: 영화 제목
- `director`: 감독
- `genre`: 장르
- `releaseYear`: 개봉 연도
- `rating`: 평점

### 주요 기능

- GET: 페이지가 열리면 MockAPI에서 영화 목록을 가져와 Table에 출력
- POST: Form에 입력한 영화 정보를 MockAPI에 등록
- PUT: 수정 버튼으로 기존 정보를 Form에 불러오고 변경 내용을 서버에 반영
- DELETE: `confirm()`으로 확인한 뒤 서버에서 영화 정보 삭제
- 검색: `filter()`를 이용하여 영화 제목 검색
- Validation: 제목과 감독 길이, 필수 입력, 개봉 연도 범위, 평점 범위 검사
- 오류 처리: 요청 실패 시 오류 메시지를 화면에 표시

## Key Learning

1. `fetch()`로 REST API에 HTTP 요청을 보내고 `response.ok`로 성공 여부를 확인하는 방법을 배웠습니다.
2. `async/await`로 비동기 응답을 기다리고 `response.json()`으로 JSON 데이터를 JavaScript 객체로 변환하는 과정을 이해했습니다.
3. GET, POST, PUT, DELETE가 각각 조회, 등록, 수정, 삭제에 사용된다는 점을 배웠습니다.
4. 서버에서 받은 배열을 순회하여 DOM 요소를 생성하고 화면을 갱신하는 방법을 배웠습니다.

## AI / Search Usage

### 사용한 도구와 자료

- Codex: 과제 요구사항 분석, MockAPI 설정 확인, Fetch API 코드 설명, 오류 원인 확인, CSS 및 README 초안 작성
- 수업 PDF `Modern JavaScript & REST API`: `fetch()`, `async/await`, REST API, CRUD 예제 참고
- MockAPI 공식 문서: Resource와 Faker.js 데이터 생성 방식 확인

### 참고하거나 반영한 기능

- GET 응답을 DOM Table에 출력하는 구조
- Form Event와 Validation
- POST, PUT, DELETE 요청 구조
- 수정·삭제 버튼 이벤트 처리
- `filter()`를 이용한 제목 검색
- 요청 성공 및 실패 메시지
- 기본 CSS 스타일

### 직접 수행하고 수정한 내용

- 영화 관리 주제와 데이터 Field 선정
- MockAPI 프로젝트 및 `movies` Resource 생성
- 초기 영화 데이터 입력
- HTML과 JavaScript 코드를 직접 입력하고 브라우저에서 실행
- DevTools Console과 Network를 이용한 요청 결과 확인
- DOM ID, 변수명, 함수 범위 오류 수정 및 CRUD 동작 확인
- 기능별 Git Commit 작성

### 배운 점

HTML과 JavaScript 파일은 `<script>` 태그로 연결되며, JavaScript의 `document`는 현재 열린 HTML 문서를 의미한다는 점을 이해했습니다. 또한 MockAPI에 저장된 데이터는 새로고침해도 유지되고, 데이터 변경 후 GET 요청을 다시 실행하면 최신 목록을 화면에 표시할 수 있다는 점을 배웠습니다.

### 본인 추정 AI 코드 기여율

- 제출 전 본인이 직접 작성

## Problem & Solution

### MockAPI 자동 생성 데이터 문제

Faker.js로 생성한 개봉 연도와 평점이 실제 범위를 벗어났습니다. 자동 생성 데이터 대신 영화 주제에 맞는 가상 데이터 3개를 직접 입력하여 해결했습니다.

### JavaScript 변수와 DOM ID 불일치

JavaScript는 변수명과 DOM ID의 대소문자를 구분하기 때문에 목록이 출력되지 않는 문제가 발생했습니다. HTML의 `movieList`와 JavaScript에서 사용하는 이름을 일치시켜 해결했습니다.

### 수정·삭제 버튼 범위 문제

삭제 버튼이 수정 버튼의 이벤트 함수 안에서 선언되어 `deleteButton is not defined` 오류가 발생했습니다. 두 버튼의 이벤트 범위를 분리하여 각 버튼이 같은 Table 행에 생성되도록 수정했습니다.

### 검색 데이터 저장 문제

서버 응답을 지역 변수에만 저장하여 검색에 사용하는 `allMovies` 배열이 비어 있었습니다. GET 응답을 `allMovies`에 저장하고 `filter()` 결과를 다시 렌더링하도록 수정했습니다.

## Reflection

메모리 배열만 사용하는 CRUD와 달리 Fetch API를 사용하면 요청이 비동기로 처리되고, 서버 응답과 오류를 별도로 다뤄야 한다는 점을 알게 되었습니다. 작은 대소문자 차이나 함수의 중괄호 위치도 실행 결과에 영향을 줄 수 있어서 Console과 Network 탭을 확인하는 과정이 중요하다고 느꼈습니다.
