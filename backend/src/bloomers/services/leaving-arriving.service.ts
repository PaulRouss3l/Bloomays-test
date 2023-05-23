import { Injectable } from '@nestjs/common';
import { Mission } from '../mission';
import Airtable, { Base } from 'airtable';

@Injectable()
export class LeavingArrivingService {
  private readonly airtable: Base;
  private airtableAvailable: boolean;

  constructor() {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.BASE_ID;

    try {
      this.airtable = new Airtable({ apiKey }).base(baseId);
      this.airtableAvailable = true;
      console.log('Airtable enabled');
    } catch (e) {
      this.airtableAvailable = false;
      console.log('Airtable disabled', e);
    }
  }

  private formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  async getMissions(): Promise<Mission[]> {
    if (this.airtableAvailable) {
      return this.getMissionsFromAirtable();
    }
    return this.getDummyMissions();
  }

  async getMissionsFromAirtable(): Promise<Mission[]> {
    const missions = await this.airtable('Missions').select().all();
    const freelancersData = await this.airtable('Freelancers').select().all();
    const freelancers = freelancersData.reduce((acc, record: any) => {
      // remove unused link field
      delete record.fields.Missions;
      acc[record.id] = record.fields;
      return acc;
    }, {});

    return missions.map((record: any) => {
      const airtableId = record.fields.Freelance[0];
      delete record.fields.Freelance;
      return {
        ...record.fields,
        freelance: freelancers[airtableId],
      };
    });
  }

  getDummyMissions(): Mission[] {
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
