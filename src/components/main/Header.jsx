import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfileModal from "./ProfileModal";
import { IoMdPerson, IoMdHelpCircleOutline } from "react-icons/io";
import { IoOptionsOutline, IoSearch } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

const Header = () => {
     const [modalOn, setModalOn] = useState(false);

     return (
          <HeaderNav>
               <div className="main-first-bar">
                    <button>
                         <AiOutlineClockCircle className="past-style" />
                    </button>
               </div>
               <SearchMessage>
                    <div>
                         {/* <input type="text" placeholder="S1ack 검색" /> */}
                    </div>
                    <div className="header-side-btns">
                         <button>
                              <IoOptionsOutline className="option-style" />
                         </button>
                         <button>
                              <IoSearch className="search-style" />
                         </button>
                    </div>
               </SearchMessage>
               <MyinfoWrap>
                    <button>
                         <IoMdHelpCircleOutline className="qna-style" />
                    </button>
                    <div
                         onClick={() => {
                              setModalOn(!modalOn);
                         }}
                    >
                         <IoMdPerson className="person-style" />
                         <div className="status-btn" />
                    </div>
                    {modalOn && <ProfileModal />}
               </MyinfoWrap>
          </HeaderNav>
     );
};

export default Header;

const HeaderNav = styled.div`
     width: 100%;
     height: 44px;
     background-color: var(--color-background);
     display: flex;
     justify-content: flex-start;
     align-items: center;
     box-sizing: border-box;
     .main-first-bar {
          width: 30%;
          height: 26px;
          display: flex;
          justify-content: flex-end;
          padding: 0 20px 0 16px;
          button {
               background-color: transparent;
               border: none;
               color: white;
               padding-top: 3px;
               .past-style {
                    width: 20px;
                    height: 20px;
               }
          }
     }
`;

const SearchMessage = styled.div`
     width: 38%;
     max-width: 732px;
     height: 26px;
     background-color: var(--color-bright-violet);
     display: flex;
     align-items: center;
     justify-content: flex-end;
     padding: 0 8px;
     border-radius: 4px;
     .header-side-btns {
          display: flex;
          button {
               background-color: transparent;
               border: none;
               color: white;
               padding-top: 5px;
          }
          .option-style {
               width: 18px;
               height: 18px;
          }
          .search-style {
               width: 17px;
               height: 17px;
          }
     }
`;

const MyinfoWrap = styled.div`
     width: 28%;
     height: 44px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: flex-end;
     gap: 12px;
     padding: 0 16px 0 32px;
     cursor: pointer;
     button {
          background-color: transparent;
          border: none;
          width: 26px;
          height: 26px;
     }
     .qna-style {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          color: white;
          margin-top: 3px;
          cursor: pointer;
     }
     .qna-style:hover {
          background-color: #5d3d5e;
     }
     div {
          .person-style {
               width: 26px;
               height: 26px;
               border-radius: 4px;
               background-color: orangered;
               color: white;
               margin-top: 6px;
          }
          .status-btn {
               width: 10px;
               height: 10px;
               border-radius: 50%;
               background-color: #2bac76;
               border: 2px solid var(--color-background);
               position: absolute;
               right: 10px;
               top: 25px;
          }
     }
`;
