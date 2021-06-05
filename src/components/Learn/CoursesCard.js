import React from 'react'
import styled from "styled-components";

function CoursesCard() {
    return (
        <CourseCard>
        <Wrap>
            <InnerWrap>
          <img src = "/images/family.png" />
          <div> Family</div>
          </InnerWrap>
          </Wrap>
          <Wrap>
            <InnerWrap>
          <img src = "/images/basics2.png" />
          <div> Basics 2</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/greetings.png" />
          <div>Greetings</div>
          </InnerWrap>
          </Wrap>
          <Wrap>
            <InnerWrap>
            <img src = "/images/restaurant.png" />
            <div> Restaurants</div>
            </InnerWrap>
            <InnerWrap>
            <img src = "/images/places.png" />
            <div > Places</div>
            </InnerWrap>
          </Wrap>
          <Wrap>
            <InnerWrap>
          <img src = "/images/jobs.png" />
          <div>Jobs</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/hobbies.png" />
          <div>Hobbies</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/directions.png" />
          <div>Directions</div>
          </InnerWrap>
          </Wrap>
        </CourseCard>
    )
}

export default CoursesCard

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
`
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #999;
 
  div{
    margin-top: 8px;
    text-align: center;
    font: 700 17px/20px sans-serif;
  }
`
