import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('게시글 등록 API', () => {
    it('/boards (POST) return 201', async () => {
      const res = await request(app.getHttpServer()).post('/boards').send({
        title: 'title',
        content: 'content',
        password: 'password0',
      });
      expect(res.statusCode).toBe(HttpStatus.CREATED);
    });
  });

  describe('게시글 목록 조회 API', () => {
    it('/boards (GET) return 400', () => {
      return request(app.getHttpServer())
        .get('/boards')
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('/boards?page=1 (GET) return 200', async () => {
      const res = await request(app.getHttpServer()).get('/boards?page=1');
      expect(res.statusCode).toBe(HttpStatus.OK);
    });
  });

  describe('게시글 수정 API', () => {
    it('/boards/:id (PATCH) return 200', async () => {
      const res = await request(app.getHttpServer()).patch('/boards/13').send({
        title: 'title modify',
        content: 'content modify',
        password: 'password01',
      });
      expect(res.statusCode).toBe(HttpStatus.OK);
    });
  });

  describe('게시글 삭제 API', () => {
    it('/boards/:id (DELETE) return 200', async () => {
      const res = await request(app.getHttpServer()).delete('/boards/12').send({
        password: 'password0',
      });
      expect(res.statusCode).toBe(HttpStatus.OK);
    });
  });
});
