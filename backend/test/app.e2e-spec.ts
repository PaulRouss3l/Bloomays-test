import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BloomerModule } from '../src/bloomers/bloomers.module';
import { INestApplication } from '@nestjs/common';

describe('LeavingArrivingController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [BloomerModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
