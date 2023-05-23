import styled from "styled-components";

interface Mission {
  id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}

interface BloomerMouvementProps {
  missions: Mission[];
  date: string;
  green: number; // boolean 0|1
}

export const BloomerMouvement: React.FC<BloomerMouvementProps> = ({ date, missions = [], green }) => {
  return (
    <StyledListItem green={green}>
      <DateLi><DateTitle>{date}</DateTitle></DateLi>
      {
        missions.map((mission) => (
          <Name key={`${mission.freelance.firstname}-${mission.freelance.lastname}`} >{mission.freelance.firstname} {mission.freelance.lastname}</Name>
        ))
      }
    </StyledListItem>
  );
}


const StyledListItem = styled.li<{ green: number }>`
  font-size: 12px;
  min-height: 5rem;
  border-left: 1px solid #cacaca;
  position: relative;
  display: flex;
  flex-direction: column;
  &:last-child{
    border-left: 0px;
    padding-bottom: 0;
  }
  color: ${(props) => (props.green ? 'green' : 'red')};
`;

const DateLi = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  &:before{
    margin-left: -8px;
    margin-right: 10px;
    content: '';
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
`;
const DateTitle = styled.span`
position: absolute;
margin-top: -1px;
display: inline-block;
`;

const Name = styled.div`
  &:last-child{
    margin-bottom: 10px;
  }
  color: #cacaca;
  font-weight: 300;
  min-height: 24px;
  width: 100%;
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export default BloomerMouvement;