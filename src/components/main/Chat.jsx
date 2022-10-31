import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";
import {
     AiOutlineBold,
     AiOutlineItalic,
     AiOutlineStrikethrough,
     AiOutlineUnorderedList,
     AiOutlineOrderedList,
     AiOutlineAlignLeft,
     AiOutlineAudio,
} from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { BiCodeBlock, BiCodeAlt } from "react-icons/bi";
import { BsCameraVideo, BsEmojiSmile } from "react-icons/bs";
import { MdAlternateEmail, MdTextFormat } from "react-icons/md";
import { IoIosAdd, IoMdSend, IoMdPerson } from "react-icons/io";

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
                                   <div>
                                        <IoMdPerson className="user-style" />
                                   </div>
                                   <span>ㅋㅋ</span>
                              </div>
                              <div className="log-text-style">
                                   <div>
                                        <IoMdPerson className="user-style" />
                                   </div>
                                   <span>ㅋㅋ</span>
                              </div>
                         </ChatLog>
                         <ChatInputWrap>
                              <div className="chat-input-style">
                                   <ChatHeader>
                                        <button>
                                             <AiOutlineBold />
                                        </button>
                                        <button>
                                             <AiOutlineItalic />
                                        </button>
                                        <button className="line">
                                             <AiOutlineStrikethrough />
                                        </button>
                                        <button>
                                             <FiLink />
                                        </button>
                                        <button>
                                             <AiOutlineOrderedList />
                                        </button>
                                        <button>
                                             <AiOutlineUnorderedList />
                                        </button>
                                        <button>
                                             <AiOutlineAlignLeft />
                                        </button>
                                        <button>
                                             <BiCodeAlt />
                                        </button>
                                        <button>
                                             <BiCodeBlock />
                                        </button>
                                   </ChatHeader>
                                   <ChatInput
                                        type="text"
                                        placeholder="내용을 입력해주세요."
                                   />
                                   <ChatFooter>
                                        <div>
                                             <button>
                                                  <IoIosAdd className="footer-btn-center-style" />
                                             </button>
                                             <button>
                                                  <BsCameraVideo />
                                             </button>
                                             <button>
                                                  <AiOutlineAudio />
                                             </button>
                                             <button>
                                                  <BsEmojiSmile />
                                             </button>
                                             <button>
                                                  <MdAlternateEmail />
                                             </button>
                                             <button>
                                                  <MdTextFormat />
                                             </button>
                                        </div>
                                        <button>
                                             <IoMdSend />
                                        </button>
                                   </ChatFooter>
                              </div>
                         </ChatInputWrap>
                         <ChatInfo>
                              Shift + Enter 키를 눌러 새 행을 추가합니다
                         </ChatInfo>
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
//chat box
const ChatInputWrap = styled.div`
     width: 100%;
     height: 16%;
     margin-top: 10px;
     padding: 0 20px;
     box-sizing: border-box;
     .chat-input-style {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          border: 1px solid gray;
          border-radius: 10px;
          overflow: hidden;
     }
`;

const ChatHeader = styled.div`
     width: 100%;
     height: 32px;
     padding: 5px;
     background-color: #f8f8f8;
     display: flex;
     align-items: center;
     button {
          margin: 0 5px;
          color: var(--color-chatinput-header-btn);
          background-color: transparent;
          border: none;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 18px;
          padding: 5px;
          position: relative; //이것때문에 모달이 어두워져도 계속 보임
          margin-left: 5px;
     }

     button:nth-child(4)::after,
     button:nth-child(5)::after,
     button:nth-child(7)::after,
     button:nth-child(8)::after {
          position: absolute;
          left: -5px;
          content: "";
          background-color: var(--color-chatinput-header-btn);
          height: 20px;
          width: 1px;
          z-index: 0;
     }
`;

const ChatInput = styled.input`
     width: 98%;
     height: 35px;
     border: none;
     padding: 4px;
     outline: none;
`;

const ChatFooter = styled.div`
     width: 100%;
     height: 32px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 4px;
     button {
          margin: 0 5px;
          background-color: transparent;
          border: none;
          width: 28px;
          height: 28px;
          font-size: 18px;
          padding: 5px;
          color: var(--color-chatinput-footer-btn);
          padding: 5px;
          position: relative;
          margin-left: 5px;
     }
     button:first-child {
          background-color: var(--color-chatinput-footer-back);
          border-radius: 50%;
          padding-top: 2px;

          .footer-btn-center-style {
               margin-top: 3px;
          }
     }
     button:nth-child(2)::after,
     button:nth-child(4)::after {
          position: absolute;
          z-index: 0;
          left: -5px;
          content: "";
          flex-grow: 1;
          background-color: var(--color-chatinput-header-btn);
          height: 20px;
          width: 1px;
     }
`;

const ChatInfo = styled.div`
     box-sizing: border-box;
     height: 24px;
     width: 100%;
     padding: 0 20px;
     display: flex;
     justify-content: flex-end;
     align-items: center;
     font-size: 10.5px;
     color: #949494;
`;
