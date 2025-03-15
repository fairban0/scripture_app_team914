import styled from "styled-components";

export const StatusBar = () => {
  return (
    <StatusBarContainer>
      <Time>9:41</Time>
      <StatusIcons>
        <div />
        <div />
        <div />
      </StatusIcons>
    </StatusBarContainer>
  );
};

const StatusBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  font-size: 14px;
`;

const Time = styled.time`
  font-weight: bold;
`;

const StatusIcons = styled.div`
  display: flex;
  gap: 5px;
`;
