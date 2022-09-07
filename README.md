# Weather Community REST API Server

### 🏹 기술 스택

![NestJS](https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D.svg?&style=for-the-badge&logo=Swagger&logoColor=white)

<br>

## 🛰️ 요구사항 분석

#### 게시글 엔티티 필요 속성 분석

- 제목 (최대 20자)
- 본문 (최대 200자)
- 게시글 업로드 시점의 날씨 정보
- 게시글 비밀번호 (6자 이상, 숫자 1개 이상 반드시 포함)
- 게시글 등록일

#### 요구사항 분석 및 구현 방법

##### 제목과 본문은 서버에서 최대 글자를 제한한다.

- DTO에서 class-validator 적용

- Entity에서 TypeORM의 @Column 데코레이션으로 최대 길이 제한

##### 제목과 본문 모두 게시글 등록 시 이모지가 포함될 수 있어야 한다.

- 데이터베이스 charset을 utf8에서 utf8mb4_unicode_ci로 변경 후 적용

##### 게시글 비밀번호는 6자 이상, 숫자 1개 이상 반드시 포함되어야 한다.

- class-validator 제공 정규 표현식 적용

##### 사용자는 게시글을 올릴 때 비밀번호를 설정할 수 있어야 한다.

- 등록 시 Request Body에 비밀번호 정보도 같이 받아서 bcrypt로 암호화 후 DB에 저장
- 수정과 삭제 시 비밀번호를 받아서 DB의 비밀번호와 일치하면 수정과 삭제하도록 구현

##### (추가 요구사항) 앱이나 웹에서 스크롤을 내릴 때마다 오래된 글들이 계속 로드 되어야 한다.

- 오래된 글들이 추가적으로 로드되어야 하므로 게시글 등록일 기준으로 최신순으로 정렬
- 게시글 목록 조회 API에서 페이징 처리하여 20개 단위로 추가 로드 되도록 구현

##### (추가 요구사항) 외부 API를 활용하여, 사용자가 게시글을 업로드한 시점의 날씨 정보가 포함되도록 한다.

- https://www.weatherapi.com 의 Real-time Weather API 사용
- Nest.js의 HttpService를 DI받아서 날씨 API에 요청하여 요청 시점의 한국 날씨 정보를 받아와 저장
- 저장 이후에 수정이 불가하도록 readonly 속성 추가


<br>

## 🔀 ERD(Entity Relationship Diagram)
![image](https://user-images.githubusercontent.com/81298415/188770561-297821b0-21d1-4934-84ec-8202a12c7730.png)

## 🛰️ API 명세서
Swagger Hub: https://app.swaggerhub.com/apis-docs/kakusi/thinksflow/1.0.0

<br>

## 🔥 e2e 테스트 
![image](https://user-images.githubusercontent.com/81298415/188782239-40121b5f-6919-4339-98d3-3da5852d6a95.png)

