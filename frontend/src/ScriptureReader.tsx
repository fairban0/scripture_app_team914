"use client";
import styled from "styled-components";
import { StatusBar } from "./components/StatusBar";
import { NavigationHeader } from "./components/NavigationHeader";
import { ScriptureContent } from "./components/ScriptureContent";
import { BottomNavigation } from "./components/BottomNavigation";

const ScriptureReader = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <ScriptureContainer>
        <StatusBar />
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

