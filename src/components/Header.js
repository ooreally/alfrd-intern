import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from 'react-router-dom';
function Header() {

  const history = useHistory();
  // console.log(history.location.pathname);
  
  const Src = "https://d35aaqx5ub95lt.cloudfront.net/vendor/3b7492ee3b3482bd4f865db8abbe083c.svg";
  const coloredSrc = "https://d35aaqx5ub95lt.cloudfront.net/vendor/85a54b84f53cfe25fc8d9ff17e5a60f3.svg";
 
  return (
    <Nav>
      <NavMenu>
        <Wrap>
          <a href="/learn" >
          { (history.location.pathname !== "/learn" )?
              <>
              <img src={Src} />
              <span>LEARN</span>
              </>
              :
              <>
              <img src={coloredSrc} />
              <span style={{color:"#1cb0f6"}}>LEARN</span>
              </>
          }
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/b30ce49d39c308bb3031647f31f6c3e9.svg" />
            <span>STORIES</span>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/3a52db17e82dec8386d05d126754cefd.svg" />
            <span>DISCUSS</span>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/25f750f861cdffc01551d728938be59b.svg" />
            <span>SHOP</span>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/d3f3ad5d80a9a934e00054f56ec5fbe9.svg" />
            <span>MORE</span>
          </a>
        </Wrap>
        <Flag src="/images/flag.png" />
        <Wrap>
          <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/fafe27c9c1efa486f49f87a3d691a66e.svg" />
          &nbsp;
          <span>0</span>
          &nbsp;&nbsp;
          <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ba95e6081679d9d7e8c132da5cfce1ec.svg" />
          &nbsp;
          <span>0</span>
          &nbsp;&nbsp;
          <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/77a8198c60820721c1c28243e13e0419.svg" />
          &nbsp;
          <span>0</span>
          &nbsp;&nbsp;
        </Wrap>
        <UserDropdown>
          <UserImgButton />
          <UserImgDropdown>
            <div>Account</div>
            <div>
              <a href="/">Your Profile</a>
            </div>
            <div>
              <a href="/settings/account">Settings</a>
            </div>
            <div>
              <a href="/">Free Plus</a>
            </div>
            <div>
              <a href="/">Help</a>
            </div>
            <div>
              <a href="/">Logout</a>
            </div>
          </UserImgDropdown>
        </UserDropdown>
      </NavMenu>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    width:100%;
    display: flex;
    align-items: center;
    padding: 0 36px;
    position: fixed;
    top:0;
    z-index: 1;
    line-height: 20px;
    background: white;
    box-sizing: border-box;
    border-bottom: 2px solid #e5e5e5;
    font: 500 17px/25px din-round,sans-serif;
}
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;
  max-width: 1140px;
  padding: 5px 24px 0px;
  position: relative;
`;

const Wrap = styled.div`
  height:100%;
  align-items: center;
  padding: 0 14px;
  display: flex;
  flex-direction: row;
  color: #afafaf;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
          height: 30px;
        }
    
     img {
         
        align-items: center;
        cursor: pointer;
        height: 36px;
        padding-right: 10px;
        transition: filter .2s;
        width: 36px;
     }
    
    span {
            
          color: #afafaf;
          cursor: pointer;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: .8px;
          position: relative;

        }
    
        &:hover {
            span{
                color: gray;
            }    
        }
      

`;

const Flag = styled.img`
  margin-top: 15px;
  margin-left: 10px;
  height: 30px;
  width: 40px;
  border-radius: 5px;
`;
const UserDropdown = styled.div`
  display: inline-block;
  position: relative;
  &:hover {
    div {
      display: block;
    }
  }
`;
const UserImgDropdown = styled.div`
  width: 350px;
  display: none;
  position: absolute;
  background-color: white;
  transform: translateX(-300px);
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  z-index: 1;

  div {
    font-weight: 700;
    font-size: 15px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #e5e5e5;
    whitespace: nowrap;
    cursor: pointer;
    &:hover {
      background: #f7f7f7;
    }
  }
  a {
    text-decoration: none;
    color: #1cb0f6;
  }
`;
const UserImgButton = styled.button`
  margin-top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0px;
  cursor: pointer;
  background: url("https://s3.amazonaws.com/duolingo-images/avatar/default_2/medium")
    no-repeat center;
`;
