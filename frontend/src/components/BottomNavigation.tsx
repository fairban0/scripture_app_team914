import styled from "styled-components";

export const BottomNavigation = () => {
  return (
    <NavBar>
      <NavItem>
        <NavIcon className="ti ti-home" />
        <NavLabel>Home</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon className="ti ti-book" />
        <NavLabel>Scriptures</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon className="ti ti-search" />
        <NavLabel>Search</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon className="ti ti-messages" />
        <NavLabel>Chats</NavLabel>
      </NavItem>
    </NavBar>
  );
};

const NavBar = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  background-color: #6b89a7;
  padding: 10px 0;
  @media (max-width: 640px) {
    padding: 8px 0;
  }
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const NavIcon = styled.i`
  font-size: 20px;
  margin-bottom: 4px;
`;

const NavLabel = styled.span`
  font-size: 12px;
`;

  