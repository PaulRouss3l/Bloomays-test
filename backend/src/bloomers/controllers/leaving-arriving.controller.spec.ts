import { Test, TestingModule } from '@nestjs/testing';
import { LeavingArrivingController as RealLeavingArrivingController } from './leaving-arriving.controller';
import { LeavingArrivingService } from '../services/leaving-arriving.service';

describe('LeavingArrivingController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RealLeavingArrivingController],
      providers: [LeavingArrivingService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return dummy data', () => {
      const expected = [
        {
          beginDate: '9/18/2023',
          endDate: '12/18/2023',
          freelance: {
            email: 'idont@exist.com',
            firstname: 'Ursula',
            id: '1',
            lastname: 'Le Guin',
          },
          id: '1',
          label: 'backend',
          missionType: 'OneShot',
        },
        {
          beginDate: '6/1/2023',
          endDate: '12/28/2023',
          freelance: {
            email: 'idont@exist-either.com',
            firstname: 'Franz',
            id: '2',
            lastname: 'Kafka',
          },
          id: '2',
          label: 'product manager',
          missionType: 'Renewable',
        },
        {
          beginDate: '6/2/2023',
          endDate: '12/28/2023',
          freelance: {
            email: 'idont@exist-either.com',
            firstname: 'A. E.',
            id: '2',
            lastname: 'Von Vogt',
          },
          id: '3',
          label: 'product manager',
          missionType: 'Renewable',
        },
        {
          beginDate: '5/1/2022',
          endDate: '5/28/2023',
          freelance: {
            email: 'idont@exist-either.com',
            firstname: 'Philip',
            id: '2',
            lastname: 'K. Dick',
          },
          id: '4',
          label: 'product manager',
          missionType: 'Renewable',
        },
      ];
      const LeavingArrivingController = app.get(RealLeavingArrivingController);
      expect(LeavingArrivingController.getMissions()).toEqual(expected);
    });
  });
});
