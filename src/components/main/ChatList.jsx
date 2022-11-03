import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddPlayerModal from "./AddPlayerModal";
import { SlNote } from "react-icons/sl";
import { IoIosArrowDown, IoIosAdd, IoMdPerson } from "react-icons/io";
import { __getChatRoom } from "../../redux/modules/room";

const ChatList = () => {
     const dispatch = useDispatch();
     const rooms = useSelector((state) => state.room);

     useEffect(() => {
          dispatch(__getChatRoom());
          console.log(rooms)
     }, [dispatch])
     //팀원추가 모달창
     const [addPlayer, setAddPlayer] = useState(false);

     return (
          <ChatListContainer>
               <Workspace>
                    S1ack
                    <IoIosArrowDown />
               </Workspace>
               <button className="write-style-btn">
                    <SlNote className="write-style" />
               </button>
               <ChannelWrap>
                    <details>
                         <summary>채널</summary>
                         <p># 채널1</p>
                         <p># 채널2</p>
                         <p># 채널3</p>
                    </details>
               </ChannelWrap>
               <DirectWrap>
                    <details>
                         <summary>다이렉트 메세지</summary>
                              {/* {rooms.map((list) => (
                                        <div className="team-line-style">
                                             <button>
                                                  <IoMdPerson className="plus-team-style" />
                                             </button>
                                             <span>{list.username}</span>
                                        </div>
                              ))} */}
                         <div className="team-line-style">
                              <button>
                                   <IoIosAdd className="plus-team-style" />
                              </button>
                              <span onClick={() => {
                                        setAddPlayer(!addPlayer)
                                   }}>
                                        팀원 추가
                              </span>
                         </div>
                    </details>
               </DirectWrap>
               {addPlayer && (
                    <AddPlayerModal
                         hide={() => {
                              setAddPlayer(false);
                         }}
                    />
               )}
          </ChatListContainer>
     );
};

export default ChatList;

const ChatListContainer = styled.div`
     width: 15%;
     height: 100%;
     background-color: var(--color-sidebar-back);
     box-sizing: border-box;
     position: relative;
     .write-style-btn {
          width: 34px;
          height: 34px;
          background-color: white;
          border-radius: 50%;
          border: none;
          position: absolute;
          right: 10px;
          top: 10px;
          .write-style {
               width: 18px;
               height: 18px;
               color: var(--color-sidebar-back);
               font-weight: 800;
          }
     }
`;

const Workspace = styled.div`
     height: 49px;
     background-color: var(--color-sidebar-back);
     border-top: 1px solid gray;
     border-bottom: 1px solid gray;
     color: #fffef8;
     font-size: 18px;
     font-weight: bolder;
     display: flex;
     align-items: center;
     justify-content: flex-start;
     gap: 5px;
     padding: 0 54px 0 16px;
     cursor: pointer;
`;

const ChannelWrap = styled.div`
     width: 100%;
     height: 40%;
     padding: 15px 0;
     display: flex;
     font-size: 15px;
     details {
          color: var(--color-sidebar-text);
          font-weight: bold;
          padding-left: 10px;
          p {
               margin-left: 15px;
               margin-top: 5px;
          }
     }
`;

const DirectWrap = styled.div`
     width: 100%;
     height: 40%;
     display: flex;
     font-size: 15px;
     details {
          color: var(--color-sidebar-text);
          font-weight: bold;
          padding-left: 10px;
          width: 100%;
          position: relative;
          .team-line-style {
               width: calc(100%-10px);
               display: flex;
               align-items: center;
               justify-content: flex-start;
               gap: 5px;
               margin-top: 5px;
               cursor: pointer;
               margin-left: 10px;
               position: relative;
          }
          .team-line-style:hover {
               width: calc(100%-10px);
               background-color: var(--color-background);
               margin-left: -10px;
               padding-left: 20px;
               overflow: hidden;
          }
          button {
               width: 25px;
               height: 25px;
               background: none;
               border: none;
               .plus-team-style {
                    font-size: 18px;
                    background-color: #532753;
                    border-radius: 3px;
                    color: var(--color-sidebar-text);
                    margin-top: 3px;
               }
          }
     }
`;
