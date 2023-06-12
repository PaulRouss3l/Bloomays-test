import request from 'supertest';
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
    const expected = [
      {
        id: '1',
        label: 'backend',
        beginDate: '9/18/2023',
        endDate: '12/18/2023',
        missionType: 'OneShot',
        freelance: {
          id: '1',
          firstname: 'Ursula',
          lastname: 'Le Guin',
          email: 'idont@exist.com',
        },
      },
      {
        id: '2',
        label: 'product manager',
        beginDate: '6/1/2023',
        endDate: '12/28/2023',
        missionType: 'Renewable',
        freelance: {
          id: '2',
          firstname: 'Franz',
          lastname: 'Kafka',
          email: 'idont@exist-either.com',
        },
      },
      {
        id: '3',
        label: 'product manager',
        beginDate: '6/2/2023',
        endDate: '12/28/2023',
        missionType: 'Renewable',
        freelance: {
          id: '2',
          firstname: 'A. E.',
          lastname: 'Von Vogt',
          email: 'idont@exist-either.com',
        },
      },
      {
        id: '4',
        label: 'product manager',
        beginDate: '5/1/2022',
        endDate: '5/28/2023',
        missionType: 'Renewable',
        freelance: {
          id: '2',
          firstname: 'Philip',
          lastname: 'K. Dick',
          email: 'idont@exist-either.com',
        },
      },
    ];
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(JSON.stringify(expected));
  });
});
