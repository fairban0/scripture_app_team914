import styled from "styled-components";

export const NavigationHeader = () => {
  return (
    <nav>
      <NavContainer>
        <BackButton>
          <i className="ti ti-chevron-left" />
        </BackButton>
        <Title>1 Nephi 4</Title>
        <MenuButton>
          <i className="ti ti-menu" />
        </MenuButton>
      </NavContainer>
      <SubTitle>Book of Mormon</SubTitle>
    </nav>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const BackButton = styled.button`
  font-size: 24px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const MenuButton = styled.button`
  font-size: 24px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
`;

const SubTitle = styled.h2`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;
