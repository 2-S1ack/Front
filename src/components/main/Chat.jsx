import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";

const Chat = () => {
     return (
          <ChatScreen>
               <ChatList />
               <UserchatWrap>
                    <UserChat>
                         <ChatUserNav>
                              <span>대화 상대</span>
                         </ChatUserNav>
                         <ChatLog>
                              <div>ㅋㅋ</div>
                         </ChatLog>
                         <ChatInputWrap>
                              <ChatHeader>
                                   <span>B</span>
                                   <span>I</span>
                                   <span>I</span>
                              </ChatHeader>
                              <ChatInput type="text" placeholder="내용을 입력해주세요." />
                              <ChatFooter>
                                   <span>+</span>
                                   <span>🤍</span>
                                   <span>💟</span>
                              </ChatFooter>
                         </ChatInputWrap>
                    </UserChat>
               </UserchatWrap>
          </ChatScreen>
     );
}

export default Chat;

const ChatScreen = styled.div`
     width: 100%;
     height: 95%;
     display: flex;
`;

const UserchatWrap = styled.div`
     width: 100%;
     height: 100%;
`;

const UserChat = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     flex-direction: column;
`;

const ChatUserNav = styled.div`
     width: 100%;
     height: 52px;
     display: flex;
     align-items: center;
     span {
          margin-left: 30px;
          font-size: 20px;
          font-weight: bolder;
     }
`;

const ChatLog = styled.div`
     width: 85vw;
     height: 72%;
     padding-top: 20px;
     padding-left: 30px;
     border-top: 1px solid gray;
`;

const ChatInputWrap = styled.div`
     width: 1600px;
     height: 150px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     border: 1px solid gray;
     border-radius: 10px;
     margin-top: 10px;
`;

const ChatHeader = styled.div`
     width: 98%;
     height: 20px;
     padding: 7px;
     span {
          margin: 0px 5px;
     }
`;

const ChatInput = styled.input`
     width: 98%;
     height: 35px;
     border: none;
     padding: 7px;
     outline: none;
`;

const ChatFooter = styled.div`
     width: 98%;
     height: 20px;
     padding: 7px;
     span {
          margin: 0px 5px;
     }
`;