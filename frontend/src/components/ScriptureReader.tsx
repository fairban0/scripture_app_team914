"use client";
import styled from "styled-components";
import NavigationHeader from "./NavigationHeader";
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
      </ScriptureContainer>
    </>
  );
};

const ScriptureContainer = styled.div`
  font-family: "EB Garamond", serif;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
  margin-bottom: 100px;
`;

export default ScriptureReader;
