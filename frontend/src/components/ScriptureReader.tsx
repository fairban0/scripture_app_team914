"use client";
import styled from "styled-components";
import { NavigationHeader } from "./NavigationHeader";
import { ScriptureContent } from "./ScriptureContent";
import BottomNavigation from "./BottomNavigation";

const ScriptureReader = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <ScriptureContainer>
        <NavigationHeader />
        <ScriptureContent />
        <BottomNavigation />
      </ScriptureContainer>
    </>
  );
};

const ScriptureContainer = styled.div`
  font-family: "EB Garamond", serif;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
`;

export default ScriptureReader;
