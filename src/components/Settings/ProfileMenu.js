import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

function ProfileMenu(props) {
    
    const [click, setClick] = useState();
    
    const clickedHandler = () => {
        if(props.coach)
        setClick(props.coach);
        else
        setClick(props.account);
    }
    
    return (
        <Container>
            <UserInfo>
            <User>H</User>
            <Details>
            <h2>HerculesMunda</h2>
            <a>View Your Profile</a>
            </Details>
            </UserInfo>
            <Profile>
            <LI clicked={props.account} onClick={clickedHandler}><a href="/settings/account">Account</a></LI>
            <LI clicked={false}><a href="/">Learning Language</a></LI>
            <LI clicked={false}><a href="/">Profile</a></LI>
            <LI clicked={false}><a href="/">Password</a></LI>
            <LI clicked={false}><a href="/">Duolingo Plus</a></LI>
            <LI clicked={false}><a href="/">Notifications</a></LI>
            <LI clicked={props.coach} onClick={clickedHandler}><a href="/settings/coach">Coach</a></LI>
            <LI clicked={false}><a href="/">Progress Sharing</a></LI>
            <LI clicked={false}><a href="/">Privacy</a></LI>
            </Profile>
        </Container>
    )
}

export default ProfileMenu

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:right;
    padding: 10px;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    // width: 350px;
    height: max-content;
`
const UserInfo = styled.div`
    display:  flex;
    padding: 20px;
`
const User= styled.div`
font-size: 18.4px;
height: 40px;
display: inline-flex;
width: 40px;
border-style: dashed;
border-width: 2px;
color: #afafaf;
border-radius: 50%;
align-items: center;
justify-content: center;
font-weight: 700;
vertical-align: middle;
`
const Details = styled.div`
    padding: 0px 15px;      
    display: flex;
    flex-direction:column;
    h2{
        padding:0;
        margin:0;
    }
    a{  
        margin:0;
        padding:0;
        font-weight: 700;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
        color:#1cb0f6;
    }
`

const Profile= styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    padding: 10px;
    font-weight: 700;
    color: #3c3c3c;
    
    a{
        text-decoration: none;
        cursor: pointer;
        color: #3c3c3c;
        justify-content: center;
        padding: 15px 20px;
        text-overflow: ellipsis;
        margin-top: 30px;
        white-space: nowrap;
    }
` 
const LI =styled.li`

    padding: 10px;
    list-style: none;
    border: 2px solid white;
    border-radius: 15px;
    background-color: ${ props => props.clicked === true ? 'rgba(0,0,0,0.2)' : 'white' }
    &: hover{
        background-color: rgba(0,0,0,0.2);
    }

`