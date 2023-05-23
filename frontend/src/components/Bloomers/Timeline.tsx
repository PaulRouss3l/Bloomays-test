import styled from "styled-components";
import BloomerMouvement from "./BloomerMouvement";
import { Bloomers, Mission } from "./Bloomers";

const countBloomers = (bloomers: { [key: string]: Mission[] }): number => {
  return Object.values(bloomers).flat().length;
}

interface TimelineProps {
  bloomers: Bloomers;
  green: number; // boolean 0|1
}

export const Timeline: React.FC<TimelineProps> = ({ bloomers, green }) => {
  const titleText = green ? 'Bloomers entrants' : 'Bloomers sortants';
  const mouvementDates = Object.keys(bloomers);

  return (
    <StyledContainer>
      <StyledTitle> <StyledCount green={green}>{countBloomers(bloomers)}</StyledCount> {titleText} </StyledTitle>
      <StyledList>
        {mouvementDates.map((date: string, i) => (
          <BloomerMouvement key={`${date}`} date={date} missions={bloomers[date]} green={green}/>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const StyledCount = styled.span<{ green: number }>`
  color: ${(props) => (props.green ? 'green' : 'red')};
  text-decoration: underline;
  padding: 5px;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  min-width: 10rem;

`;

export default Timeline;