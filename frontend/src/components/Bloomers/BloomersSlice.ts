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
  return []
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('fr-FR');
}

export const groupByDate = (missions: Mission[], attr: 'beginDate' | 'endDate', queryDateParam?: Date): Bloomers => {
  const queryDate = queryDateParam ? queryDateParam : new Date();
  const endOfNextMonth = new Date(queryDate.getFullYear(), queryDate.getMonth() + 2, 0);

  // filter out irrelevant missions and format date to be displayed
  const selectedMissions = missions
    .map((mission) => ({
        ...mission,
        beginDate: new Date(mission.beginDate),
        endDate: new Date(mission.endDate),
    }))
    .filter((mission) => mission[attr] >= queryDate && mission[attr] <= endOfNextMonth )
    .map((mission) => ({
      ...mission,
      beginDate: formatDate(mission.beginDate),
      endDate: formatDate(mission.endDate),
  }))

  return selectedMissions.reduce((acc: Bloomers, mission: Mission) => {
    const missionDate = mission[attr]

    if (missionDate in acc) {
      acc[missionDate].push(mission)
    } else {
      acc[missionDate] = [mission]
    }
    return acc
  }, {})
}