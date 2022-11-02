import React, { useState} from "react";
import styled from "styled-components";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import {IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";

const Chat = () => {

     return (
          <ChatScreen>
               <ChatList />
               <UserchatWrap>
                    <UserChat>
                         <ChatUserNav>
                              <div>
                                   <IoMdPerson className="user-nav-style" />
                              </div>
                              <span>대화 상대</span>
                         </ChatUserNav>
                              <ChatLog>
                                   <div className="log-text-style">
                                        <ChatUserInfo>
                                             <IoMdPerson className="user-style" />
                                             <Useranme>
                                                  <p>이름</p>
                                                  <p>내용</p>
                                             </Useranme>
                                        </ChatUserInfo>
                                   </div>
                              </ChatLog>
                              <ChatBox />
                    </UserChat>
               </UserchatWrap>
          </ChatScreen>
     );
};

export default Chat;

const ChatScreen = styled.div`
     width: 100%;
     height: 95.3vh;
     display: flex;
     background-color: white;
     box-sizing: border-box;
`;

const UserchatWrap = styled.div`
     width: 86.5%;
     height: 100%;
`;

const UserChat = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: flex-end;
`;

const ChatUserNav = styled.div`
     width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
     padding: 0 16px 0 20px;
     box-sizing: border-box;
     border-top: 1px solid gray;
     border-bottom: 1px solid gray;
     div {
          .user-nav-style {
               width: 24px;
               height: 24px;
               margin-top: 7px;
               background-color: orangered;
               color: white;
               border-radius: 5px;
          }
     }
     span {
          height: 28px;
          font-size: 18px;
          font-weight: bolder;
          padding: 10px;
     }
`;

const ChatLog = styled.div`
     width: 100%;
     height: 78%;
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
     .log-text-style {
          padding: 8px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          .user-style {
               width: 36px;
               height: 36px;
               margin-top: 7px;
               background-color: orangered;
               color: white;
               border-radius: 5px;
          }
          span {
               font-size: 15px;
          }
     }
`;

const ChatUserInfo = styled.div`
     display: flex;
`;

const Useranme = styled.div`
     
`;