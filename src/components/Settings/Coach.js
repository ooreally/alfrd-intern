import React, {useEffect,useState} from 'react'
import styled from 'styled-components';
import FooterNav from '../FooterNav';
import ProfileMenu from './ProfileMenu';
let clickedId = 2;
let goalClicked = null;
function Coach() {
    const [goalChanged, setGoalChanged] = useState();

    // setGoalChanged(clickedId);
    const Goals =[{
        name: "Basic" ,
        reward: "1 XP per day" 
    },
    {
        name: "Casual" ,
        reward: "10 XP per day"
    },
    {
        name: "Regular" ,
        reward: "20 XP per day"
    },
    {
        name: "Serious" ,
        reward: "30 XP per day"
    },
    {
        name: "Intense" ,
        reward: "50 XP per day"
    },
]
    // useEffect( () => {
    //     clickedHandler();
    // },[clickedId]);
    const clickedHandler = (event,index) => {
        event.preventDefault();
        setGoalChanged(index);
            clickedId = index;
            
            if(clickedId == 2)
            goalClicked = null;
            else
            goalClicked = index;
        
        console.log(clickedId);
    }
    
    return (
        <Container>
            <MainContainer>
            <GoalSetting>
            <Title>
                <h2>Daily Goal settings</h2>
                <Button selected={goalClicked} > SAVE CHANGES</Button>
                
            </Title>
            <Description>Coach here! Selecting a daily goal will help you stay motivated while learning a language. 
                    You can change your goal at any time.</Description>
            <Plans>
            <LogoImg src="https://d35aaqx5ub95lt.cloudfront.net/images/owls/coach.svg"/>
            <Table>
                {Goals.map((goal,index) => (
                    <TR id={index} onClick={(event)=>clickedHandler(event,index)} key={index}>
                    <TD1> {goal.name} </TD1>
                    <TD2> {goal.reward} </TD2>  
                    </TR>
                ))
                    }
            </Table>
            </Plans>
            </GoalSetting>
                <FooterNav/>
            </MainContainer>
            <ProfileMenu coach={true} account={false}/>
        </Container>
    )
}

export default Coach

const Container = styled.main`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    position:relative;
    margin-top: 80px;
    padding-top: 10px;
    width: 100%;
    min-height: calc(100vh - 70px);
    margin-left: 400px;
    margin-right: 350px;
    max-width: 1140px;
    // min-width: 900px;   
`
const MainContainer = styled.div`
padding-right: 20px;
overflow-x: hidden;
width: max-content;
`
const GoalSetting = styled.div`
padding-bottom: 40px;
`
const Title= styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
    color: #3c3c3c;
    font: 500 17px/20px sans-serif;

`
const Button= styled.button`
    // justify-content: flex-end;
    margin-left: auto;
    float: right;
    height: 50px;
    padding: 10px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: 700;
    background-clip: padding-box;
    border-width: 0 0 4px;
    // border:0px;
    color: ${props => props.selected != null ? 'white' : '#afafaf'};
    background: ${props => props.selected == `${goalClicked}` ? '#58cc02': 'rgba(0,0,0,0.1)' };
`
const Description =  styled.p`

    font-size: 14px;
    color: #999;
    max-width: 680px;
`
const Plans = styled.div`
display: flex;
flex-direction: row;
margin-top: 40px;
` 
const LogoImg = styled.img`
    
    transform: scale(1.2);
    transform-origin: 0 0;
    height: 180px;
    width: 180px;
    // background-size: 180px 180px;
    padding: 30px;
`
const Table= styled.div`
   
    margin-left: auto;
    float: right;
    width: 400px;
    border: 2px solid #e5e5e5 ;
    border-radius: 15px;
`
const TR = styled.div`
margin:0;
padding:15px;
background: ${props => props.id == `${clickedId}` ? '#ddf4ff'  : 'white'};
border:  ${props => props.id == `${clickedId}` ? '1px solid #84d8ff'  :"1px solid #e5e5e5"};
display: flex;
color: ${props => props.id == `${clickedId}` ? '#1899d6'  :"#4b4b4b"}; 
`

const TD1= styled.span`
    width: 50%;
    font-weight: 900;
    
`
const TD2= styled.span`
display: flex;
justify-content: right;
width: 50%;
`