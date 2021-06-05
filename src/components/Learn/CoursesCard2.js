import React from 'react'
import styled from "styled-components";

function CoursesCard2() {
    return (
        <CourseCard2>
            <Wrap>
            <InnerWrap>
          <img src = "/images/questions.png" />
          <div> Questions</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/market.png" />
          <div>Market</div>
          </InnerWrap>
          </Wrap>
        <Wrap>
            <InnerWrap>
          <img src = "/images/weather.png" />
          <div> Weather</div>
          </InnerWrap>
          </Wrap>
          
          <Wrap>
            <InnerWrap>
          <img src = "/images/family2.png" />
          <div>Family 2</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/languages.png" />
          <div>Languages</div>
          </InnerWrap>
          <InnerWrap>
          <img src = "/images/leisure.png" />
          <div>Leisure</div>
          </InnerWrap>
          </Wrap>

          <Wrap>
            <InnerWrap>
            <img src = "/images/plans.png" />
            <div>Plans</div>
            </InnerWrap>
            <InnerWrap>
            <img src = "/images/apartment.png" />
            <div >Apartment</div>
            </InnerWrap>
          </Wrap>

          <Wrap>
            <InnerWrap>
            <img src = "/images/shopping.png" />
            <div>Shopping</div>
            </InnerWrap>
            <InnerWrap>
            <img src = "/images/travel.png" />
            <div >Travel</div>
            </InnerWrap>
          </Wrap>
          
        </CourseCard2>
    )
}

export default CoursesCard2

const CourseCard2 = styled.div`
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
