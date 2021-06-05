import React from "react";
import styled from "styled-components";

import Card from "./Card";
function SideLearnDiv() {
  const cards = [
    {
      name: "XP Progess",
      sidename: "edit goal",
      subhead: "Daily goal",
      rate: "0/20XP",
      source: "https://d35aaqx5ub95lt.cloudfront.net/images/chest-closed.svg",
    },
    {
      name: "Next Achievement",
      sidename: "view all",
      subhead: "Rach a 3 day streak",
      rate: "0/3",
      source: "https://d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-wildfire.svg"
    },
  ];

  return (
    <Container>
      <LeaderBoard>
        <Img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/placeholder.svg" />
        <h3> Unlock Leaderboards!</h3>
        <span>Complete 10 more lessons to start competing</span>
      </LeaderBoard>
      {cards.map((card,index) => (
        <Card key={index}
          title={card.name}
          des={card.sidename}
          subhead={card.subhead}
          rate={card.rate}
          src={card.source}
        />
      ))}
    </Container>
  );
}

export default SideLearnDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: right;
  padding: 10px;
  // border: 2px solid #e5e5e5;
  // border-radius: 10px;
  // width: 350px;
  height: max-content;
`;
const LeaderBoard = styled.div`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 24px 24px;
  padding: 24px;
  align-items: center;
  width: 300px;
  text-align: center;
  color: #3c3c3c;
  h3 {
    font: 600 17px/20px sans-serif;
  }
  span {
    font-size: 15px;
  }
`;
const Img = styled.img`
  width: max-content;
`;
