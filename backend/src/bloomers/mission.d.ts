type MissionType = 'OneShot' | 'Renewable';

export interface Freelance {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface Mission {
  id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: MissionType;
  freelance: Freelance;
}
