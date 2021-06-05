import React, {useEffect} from "react";
import styled from "styled-components";

import MainCard from "./MainCard"
import CoursesCard from "./CoursesCard";
import CoursesCard2 from "./CoursesCard2";
import FooterNav from "../FooterNav";
import SideLearnDiv from "./SideLearnDiv/SideLearnDiv";
function Learn() {
 
 
  return (
    <Container>
      <MainContainer>
        <MainCard/>
        <CoursesCard/>        
        <Checkpoint>
            <div>
              <img src="https://d35aaqx5ub95lt.cloudfront.net/images/checkpoint-castle-unlocked.svg"/>
            </div>
            
        </Checkpoint>
        <Details>
         <CoursesCard2/>
        </Details>
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
  padding-bottom: 30px;
  overflow-x: hidden;
  height: max-content;
  // justify-content: center;
  align-items: center;
`;

const Checkpoint = styled.div`
display: flex;
flex-direction: row;
align-items: center;
div{
  z-index:1;
  border-radius: 50%;
  background: #ce82ff;
  width: 110px;
  height: 110px;
  border: 20px solid white;
  // align-items: center;
  // vertical-align: middle;
  // justify-content: center;
}

img{
  height: 50px;
  width: 50px;
  margin:30px 30px 30px 30px;
}
`
const Details =styled.div`
  border-radius: 15px;
  border: 2px solid #e5e5e5;
  padding: 20px;
  margin-top: -50px;
  // height: 90px;
  width: 60%;
  background: #f0f0f0;
`