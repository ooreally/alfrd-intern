import React, {useEffect} from "react";
import styled from "styled-components";

import MainCard from "./MainCard"
import CoursesCard from "./CoursesCard";
import FooterNav from "../FooterNav";
import SideLearnDiv from "./SideLearnDiv";
function Learn() {
 
 
  return (
    <Container>
      <MainContainer>
        <MainCard/>
        <CoursesCard/>        

        <FooterNav />
      </MainContainer>

      <SideLearnDiv />
    </Container>
  );
}

export default Learn;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 80px;
  padding-top: 10px;
  // width: 100%;
  justify-content: center;
  // align-items: center;
  min-height: calc(100vh - 70px);
  // margin-left: 400px;
  // margin-right: 350px;
  // max-width: 1140px;
  // min-width: 900px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;  
  padding-right: 30px;
  overflow-x: hidden;
  // width: max-content;
  // justify-content: center;
  align-items: center;
`;
