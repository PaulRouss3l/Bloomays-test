import { Bloomers, Mission } from "./Bloomers";

export const fetchMissionData = async () => {
  try {
    const response = await fetch('http://localhost:3000/');
    if (!response.ok) {
      throw new Error('Could not reach API');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}


export const groupByDate = (missions: Mission[], attr: 'beginDate' | 'endDate', queryDateParam?: string): Bloomers => {
  const queryDate = queryDateParam ? queryDateParam : new Date().toLocaleDateString()

  const selectedMissions = missions.filter((mission) => mission[attr] >= queryDate)
  return selectedMissions.reduce((acc: Bloomers, mission: Mission) => {
    const missionDate = mission[attr]

    if (missionDate in acc) {
      acc[missionDate].concat([mission])
    } else {
      acc[missionDate] = [mission]
    }
    return acc
  }, {})
}