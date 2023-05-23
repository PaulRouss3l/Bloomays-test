import { Injectable } from '@nestjs/common';
import { Mission } from '../mission';

@Injectable()
export class LeavingArrivingService {
  private formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
  getMissions(): Mission[] {
    return [
      {
        id: '1',
        label: 'backend',
        beginDate: this.formatDate('2023-09-18'),
        endDate: this.formatDate('2023-12-18'),
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
        beginDate: this.formatDate('2023-06-01'),
        endDate: this.formatDate('2023-12-28'),
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
        beginDate: this.formatDate('2023-06-02'),
        endDate: this.formatDate('2023-12-28'),
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
        beginDate: this.formatDate('2022-05-01'),
        endDate: this.formatDate('2023-05-28'),
        missionType: 'Renewable',
        freelance: {
          id: '2',
          firstname: 'Philip',
          lastname: 'K. Dick',
          email: 'idont@exist-either.com',
        },
      },
    ];
  }
}
