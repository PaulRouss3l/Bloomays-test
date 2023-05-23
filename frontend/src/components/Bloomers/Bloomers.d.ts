interface Freelance {
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
  missionType: string;
  freelance: Freelance;
}

export interface Bloomers {
  [key: string]: Mission[]
}