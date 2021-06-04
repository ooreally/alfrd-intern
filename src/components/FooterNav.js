import React from 'react';
import styled from 'styled-components';
function FooterNav() {
    return (
        <FootNav>
            <FooterNavMenu>
                <span>About</span>
                <span>Blog</span>
                <span>Schools</span>
                <span>Apps</span>
                <span>Help</span>
                <span>Guidelines</span>
                <span>Careers</span>
                <span>Terms</span>
                <span>Privacy</span>
            </FooterNavMenu>
        </FootNav>
    )
}

export default FooterNav

const FootNav = styled.div`
    border-top: 2px solid #e5e5e5;
    padding-top: 20px;
    display: flex;
    width:max-content;
    flex-direction: row;
    // position: fixed;
    align-items: center;
    height: 50px;
    font: 500 17px/25px din-round,sans-serif;
    // overflow:  hidden;

`
const FooterNavMenu = styled.div`
    
display: flex;
align-items: center;
justify-content: center;
color: #afafaf;
    span{  
        font-size:15px;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 6px;
        cursor: pointer;
    }
    
`
