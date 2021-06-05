import React from 'react'
import styled from "styled-components";

function MainCard() {
    return (
        <Card>
          <h3>Choose Your Path!</h3>
          <span>Beginners start at Basics 1.</span>
          <span>Advanced learners take a short test.</span>
          <Image>
            <Img1>
            <img src="/images/basics.png"/>
            <div>Basics 1</div>
          </Img1>
          <span>OR</span>
          <Img2>
            <img src="/images/placements.png"/>
            <div>Placements Test</div>
          </Img2>
          </Image>
        </Card>
    )
}

export default MainCard

const Card = styled.div`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 24px 24px ;
  padding: 24px 60px;
  // justify-content: center;
  width: 300px;
  text-align: center;
  color: #3c3c3c;
  h3 {
    font: 600 20px/20px sans-serif;
  }
  span {
    font-size: 15px;
    color: #999;
  }
`;
const Image = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:10px;
  padding:20px;
  // justify-content: center;
  span{
      margin-top:50px;
  }
`;

const Img1 = styled.div`
align-items: center;
justify-content: center;
padding-right: 10px;
img{
  width: 90px;
  height: 90px;
}
div{
  font: 700 16px/20px sans-serif;
}
`
const Img2 = styled.div`
align-items: center;
justify-content: center;
text-align: center; 
img{
  width: 90px;
  height: 90px;
}
div{
  font: 700 16px/20px sans-serif;
}
`

{/* <svg viewbox="0 0 135 135">
            <image
              height="7830"
              width="135"
              href="https://d35aaqx5ub95lt.cloudfront.net/images/b1b20e95f8811cd60e1dbc42e1331220.svg"
              xmlns="https://d35aaqx5ub95lt.cloudfront.net/images/b1b20e95f8811cd60e1dbc42e1331220.svg" 
            ></image>
          </svg> */}