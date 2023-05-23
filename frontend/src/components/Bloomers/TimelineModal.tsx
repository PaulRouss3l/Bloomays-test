import { useEffect, useState } from "react";
import styled from "styled-components";
import { Mission } from "./Bloomers";
import cross from "../../assets/cross.svg";
import Timeline from "./Timeline";
import { fetchMissionData, groupByDate } from "./BloomersSlice";


export const TimelineModal: React.FC = () => {
  // Data retrieval
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMissionData()
      setMissions(data);
    };

    fetchData();
  }, []);


  // Modal handling
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const arriving = groupByDate(missions, 'beginDate')
  const leaving = groupByDate(missions, 'endDate')

  return (
    <>
      {isOpen && (
    <StyledBackground visible={+isOpen}>
      <StyledContainer>
        <StyledDivClose><StyledCloseIcon src={cross} onClick={closeModal} /></StyledDivClose>
        <Timeline bloomers={arriving} green={+true} />
        <Timeline bloomers={leaving} green={+false} />
      </StyledContainer>
    </StyledBackground>
      )}
    </>
  );
}

const StyledContainer = styled.div`
  min-width: 25rem;
  border-radius: 0.5rem;
  background-color: #f8f9fa;
  margin-top: auto;
  margin-bottom: auto;
`;
const StyledBackground = styled.div<{ visible: number }>`
  z-index: 10;
  position: fixed;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.25rem);
  box-shadow: 0px 0px 15px rgba(143, 143, 143, 0.15),
    0px 2px 5px rgba(143, 143, 143, 0.15);
`;

const StyledDivClose = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StyledCloseIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: auto;
  cursor: pointer;
  display: block;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

export default TimelineModal;