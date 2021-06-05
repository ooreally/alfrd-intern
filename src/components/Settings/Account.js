import React, {useState} from 'react'
import styled from 'styled-components'

import FooterNav from '../FooterNav';
import ProfileMenu from './ProfileMenu';

let btnClicked = null;
let changeDone = null;
let btnClickedAgain = false;

function Account() {
    
    const [username,setUsername] = useState('HerculesMunda');
    const [email, setEmail] =useState('Hercu03@gmail.com');
    const [btnChange, setBtnChanged] = useState()
    const buttons =[
        "Sound Effect" , 
        "Animations" ,
        "Motivational messages" ,
        "Listening exercises" ]

    const nameChangeHandler = (value) => {
        setEmail(value);
    }

    const emailChangeHandler = (value) => {
        setUsername(value);
        console.log(username);
    }

    const btnClickHandler = (event,index)=> {
        event.preventDefault();
        
        if(btnClickedAgain == true && btnClicked == index)
        {
            // console.log("again again")
            setBtnChanged(index);
            btnClicked = index;
            changeDone = index;
            btnClickedAgain = false;
        }
        else if( btnClicked == index )
        {   
            // console.log("again")
            setBtnChanged(null);
            btnClicked = index;
            changeDone = null;
            btnClickedAgain = true;
            
        }
        else
        {   
            setBtnChanged(index);
            btnClicked = index;
            changeDone = index;
            btnClickedAgain = false;
            // console.log(btnClickedAgain);
        }

        
       
            // console.log(btnClicked);
    }

    return (
        <Container>
            <MainContainer>
            <AccountSetting>
            <Title>
                <h2>Account settings</h2>
                <Button selected={changeDone}> SAVE CHANGES</Button>
                
            </Title>
            <Plans>
            <Table>
                
                    <TR >
                    <TD1> Username </TD1>
                    <TD2> <Input id="userName" type="text" defaultValue={username}
                    onClick={(event)=>nameChangeHandler(event.target.value)}></Input></TD2>  
                    </TR>
                    <TR >
                    <TD1> Email </TD1>
                    <TD2> <Input id="email" type="text" defaultValue={email}
                    onClick={(event)=>emailChangeHandler(event.target.value)}></Input>
                    <Notif>Email not verified. <span>Verify now.</span></Notif></TD2>  
                    </TR>
                    
                    {
                        buttons.map( (btn,index) => (
                            <TR  >
                            <TD1> {btn} </TD1>
                            <TD2  onClick={(event) => btnClickHandler(event,index)}> <SlideButton id={index}/></TD2>  
                            </TR>
                        ))
                    }
                    <TR>
                        <TD1>Profile Picture</TD1>
                        <TD2><InputBtn type="file">CHOOSE FILE</InputBtn>
                        <span>maximum image size is 1 MB</span>
                        </TD2>
                    </TR>
                    
                    <TR>
                        <TD1></TD1>
                        <TD2> <a href="">Disable my account</a></TD2>
                    </TR>

                    <TR>
                        <TD1></TD1>
                        <TD2> <a href="">Delete my account</a></TD2>
                    </TR>
                    <TR>
                        <TD1></TD1>
                        <TD2> <a href="">Export my data</a></TD2>
                    </TR>
                    <TR>
                        <TD1></TD1>
                        <TD2> <a href="">Logout</a></TD2>
                    </TR>
                    
            </Table>
            </Plans>
            </AccountSetting>
                <FooterNav/>
            </MainContainer>
            <ProfileMenu coach={true} account={false}/>
        </Container>
    )
}

export default Account

const Container = styled.div`
    display: flex;
    flex-direction: row;
    position:relative;
    margin-top: 80px;
    padding-top: 10px;
    width: 100%;
    justify-content: center;
    min-height: calc(100vh - 70px);
    // margin-left: 400px;
    // margin-right: 350px;
    // max-width: 1140px;
    // min-width: 900px;   
`
const MainContainer = styled.div`
padding-right: 20px;
overflow-x: hidden;
width: max-content;
align-items: center;
`
const AccountSetting = styled.div`
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
margin-left: auto;
float: right;
height: 50px;
padding: 10px;
border-radius: 16px;
font-size: 15px;
font-weight: 700;
background-clip: padding-box;
border-width: 0 0 4px;
color: ${props => props.selected != null ? 'white' : '#afafaf'};
background: ${props => props.selected == `${changeDone}` ? '#58cc02': 'rgba(0,0,0,0.1)' };
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


const Table= styled.table`
width: 90%;
`
const TR = styled.tr`
margin:0;
padding:15px;
width: 100%;
display: flex;

`

const TD1= styled.td`
    width: 50%;
    padding:15px;
    font-weight: 900;
    color: #4b4b4b;
    font-size:15px; 
    text-align: right;
`
const TD2= styled.td`
display: flex;
flex-direction: column;
width: 100%;
// height: max-content;
span,a{
    color: #999;
    font-size: 14px;
    font-weight: 500;
}
a{
    margin-top:0;
    padding:0;
    text-decoration: none;
}
`
const Notif = styled.div`
margin-top:0;
padding-top:0;
color:red;
top: 0;
font-size: 14px;
display: flex;
float:right;
margin-left:auto;
span{
    text-decoration: underline;
    color:red;
}
`
const Input=styled.input`
    padding:10px;
    width: 100%;
    background: #f7f7f7;
    border-radius: 20px;
    color:#4b4b4b;
    line-height: 24px;
    border: 2px solid #e5e5e5;
    text-align: left;
`
const SlideButton = styled.button`
    width: 60px;
    height: 25px;
    margin-top: 10px;
    border-radius:20px;
    border: 1px solid #1cb0f6;
    position:relative;
    diaplay:inline;
    background-color: ${ props => props.id == `${btnClicked}` ? btnClickedAgain == false ? "white" : "#1cb0f6" : "#1cb0f6" };
    &:after{
        vertical-align: middle;
        left: ${ props => props.id == `${btnClicked}`? btnClickedAgain == false ?  "0" : "10" : "10"};
        margin-top:-5px;
        border: 1px solid #1cb0f6;
        border-radius:10px;
        position:absolute;
        top:0;
        right: 0;
        bottom: 0;
        height: 32px;
        width: 32px;
        content: "";
        background:white;
        z-index:1;
    }
    `
const InputBtn = styled(Button)`
    margin:0px;
    width: max-content;
    border: 2px solid #e5e5e5;
    background: white;
`