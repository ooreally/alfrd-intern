import React from 'react'
import styled from 'styled-components'
function Card(props) {
    return (
        <Container>
            <Title>
                <Name>{props.title}</Name>
                <span>{props.des}</span>
            </Title>
            <Description>
            <img src={props.src}/>
            <Details>
                <Heading>{props.subhead}</Heading>
                <Rating>
                <Filler/>&nbsp;&nbsp;
                <Xp>{props.rate}</Xp>
                </Rating>
                
            </Details>
            </Description>
        </Container>
    )
}

export default Card

const Container = styled.div`
background: #fff;
border: 2px solid #e5e5e5;
border-radius: 16px;
display: flex;
flex-direction: column;
margin: 0 24px 24px;
padding: 24px;

width: 300px;  
color: #3c3c3c; 
`
const Title= styled.div`
display: flex;
flex-direction: row;
font-size: 15px;
color: #1cb0f6;
justify-content: right;
span{
    text-transform: uppercase;
    font-weight: 600;
}
`
const Name= styled.div`
    font: 600 17px/20px sans serif;
    color: #3c3c3c;
    width: 70%; 
`
const Description =styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
`
const Heading = styled.div`
padding: 10px;
font: 500 15px/20px sans-serif;
`
const Rating = styled.div`
padding: 10px;
display: flex;
    flex-direction: row;
    color: #777;
    float: right;
    align-items: right;
position: relative;
`
const Filler = styled.div`
    width: 150px;
    padding: 0;
    margin-top: 5px;
    height: 14px;
    bottom: 0;
    border-radius: 15px;
    background:#e5e5e5;
`
const Xp = styled.div`
font-size: 14px;
text-align: right;
justify-content:right;
// width: 40%;
`