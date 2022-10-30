import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfileModal from "./ProfileModal"

const Header = () => {

     const [modalOn, setModalOn] = useState(false);

     return (
          <HeaderNav>
               <SearchMessage />
               <MyinfoWrap onClick={() => {setModalOn(!modalOn)}}>
                    <Myinfo src={"/images/default.PNG"} />
               </MyinfoWrap>
               {modalOn && <ProfileModal />}
          </HeaderNav>
     );
}

export default Header;

const HeaderNav = styled.div`
     width: 100%;
     height: 5%;
     background-color: #4A154B;
     display: flex;
     justify-content: center;
     align-items: center;
`;


const SearchMessage = styled.div`
     width: 40%;
     height: 50%;
     background-color: #611F69;
     margin:0 0 0 auto;
`;

const MyinfoWrap = styled.div`
     width: 30px;
     height: 60%;
     margin: 0 0 0 auto;
     margin-right: 20px;
     cursor: pointer;
`;

const Myinfo = styled.img`
     width: 30px;
     height: 100%;
`;