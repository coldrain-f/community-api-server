# Weather Community HTTP API Server





### ๐น ๊ธฐ์  ์คํ

![NestJS](https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D.svg?&style=for-the-badge&logo=Swagger&logoColor=white)

<br>

## ๐ฐ๏ธ ์๊ตฌ์ฌํญ ๋ถ์

#### ๊ฒ์๊ธ ์ํฐํฐ ํ์ ์์ฑ ๋ถ์

- ์ ๋ชฉ (์ต๋ 20์)
- ๋ณธ๋ฌธ (์ต๋ 200์)
- ๊ฒ์๊ธ ์๋ก๋ ์์ ์ ๋ ์จ ์ ๋ณด
- ๊ฒ์๊ธ ๋น๋ฐ๋ฒํธ (6์ ์ด์, ์ซ์ 1๊ฐ ์ด์ ๋ฐ๋์ ํฌํจ)
- ๊ฒ์๊ธ ๋ฑ๋ก์ผ

#### ์๊ตฌ์ฌํญ ๋ถ์ ๋ฐ ๊ตฌํ ๋ฐฉ๋ฒ

##### ์ ๋ชฉ๊ณผ ๋ณธ๋ฌธ์ ์๋ฒ์์ ์ต๋ ๊ธ์๋ฅผ ์ ํํ๋ค.

- DTO์์ class-validator ์ ์ฉ

- Entity์์ TypeORM์ @Column ๋ฐ์ฝ๋ ์ด์์ผ๋ก ์ต๋ ๊ธธ์ด ์ ํ

##### ์ ๋ชฉ๊ณผ ๋ณธ๋ฌธ ๋ชจ๋ ๊ฒ์๊ธ ๋ฑ๋ก ์ ์ด๋ชจ์ง๊ฐ ํฌํจ๋  ์ ์์ด์ผ ํ๋ค.

- ๋ฐ์ดํฐ๋ฒ ์ด์ค charset์ utf8์์ utf8mb4_unicode_ci๋ก ๋ณ๊ฒฝ ํ ์ ์ฉ

##### ๊ฒ์๊ธ ๋น๋ฐ๋ฒํธ๋ 6์ ์ด์, ์ซ์ 1๊ฐ ์ด์ ๋ฐ๋์ ํฌํจ๋์ด์ผ ํ๋ค.

- class-validator ์ ๊ณต ์ ๊ท ํํ์ ์ ์ฉ

##### ์ฌ์ฉ์๋ ๊ฒ์๊ธ์ ์ฌ๋ฆด ๋ ๋น๋ฐ๋ฒํธ๋ฅผ ์ค์ ํ  ์ ์์ด์ผ ํ๋ค.

- ๋ฑ๋ก ์ Request Body์ ๋น๋ฐ๋ฒํธ ์ ๋ณด๋ ๊ฐ์ด ๋ฐ์์ bcrypt๋ก ์ํธํ ํ DB์ ์ ์ฅ
- ์์ ๊ณผ ์ญ์  ์ ๋น๋ฐ๋ฒํธ๋ฅผ ๋ฐ์์ DB์ ๋น๋ฐ๋ฒํธ์ ์ผ์นํ๋ฉด ์์ ๊ณผ ์ญ์ ํ๋๋ก ๊ตฌํ

##### (์ถ๊ฐ ์๊ตฌ์ฌํญ) ์ฑ์ด๋ ์น์์ ์คํฌ๋กค์ ๋ด๋ฆด ๋๋ง๋ค ์ค๋๋ ๊ธ๋ค์ด ๊ณ์ ๋ก๋ ๋์ด์ผ ํ๋ค.

- ์ค๋๋ ๊ธ๋ค์ด ์ถ๊ฐ์ ์ผ๋ก ๋ก๋๋์ด์ผ ํ๋ฏ๋ก ๊ฒ์๊ธ ๋ฑ๋ก์ผ ๊ธฐ์ค์ผ๋ก ์ต์ ์์ผ๋ก ์ ๋ ฌ
- ๊ฒ์๊ธ ๋ชฉ๋ก ์กฐํ API์์ ํ์ด์ง ์ฒ๋ฆฌํ์ฌ 20๊ฐ ๋จ์๋ก ์ถ๊ฐ ๋ก๋ ๋๋๋ก ๊ตฌํ

##### (์ถ๊ฐ ์๊ตฌ์ฌํญ) ์ธ๋ถ API๋ฅผ ํ์ฉํ์ฌ, ์ฌ์ฉ์๊ฐ ๊ฒ์๊ธ์ ์๋ก๋ํ ์์ ์ ๋ ์จ ์ ๋ณด๊ฐ ํฌํจ๋๋๋ก ํ๋ค.

- https://www.weatherapi.com ์ Real-time Weather API ์ฌ์ฉ
- Nest.js์ HttpService๋ฅผ DI๋ฐ์์ ๋ ์จ API์ ์์ฒญํ์ฌ ์์ฒญ ์์ ์ ํ๊ตญ ๋ ์จ ์ ๋ณด๋ฅผ ๋ฐ์์ ์ ์ฅ
- ์ ์ฅ ์ดํ์ ์์ ์ด ๋ถ๊ฐํ๋๋ก readonly ์์ฑ ์ถ๊ฐ


<br>

## ๐ฐ๏ธ API ๋ช์ธ์
**Swagger Hub:**

https://app.swaggerhub.com/apis-docs/kakusi/thinksflow/1.0.0

<br>

## ๐ ERD(Entity Relationship Diagram)
![image](https://user-images.githubusercontent.com/81298415/188783284-cf26d6ca-c8e1-4886-acf0-51de5451343b.png)

## โจ ํ๋ก์ ํธ ๊ตฌ์กฐ
```
project/
โโ src/
โ  โโ boards/
โ  โโ database
โโ app.controller.ts
โโ app.module.ts
โโ app.service.ts
โโ main.ts
```

<br>

## ๐ฅ e2e ํ์คํธ 
![image](https://user-images.githubusercontent.com/81298415/188782239-40121b5f-6919-4339-98d3-3da5852d6a95.png)

