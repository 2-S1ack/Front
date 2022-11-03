import React, { useState } from "react";
import styled from "styled-components";

import { IoMdPerson } from "react-icons/io";

import StompJS from "stompjs";
import SockJS from "sockjs-client";

import ChatBox from "./ChatBox";
import ChatList from "./ChatList";

const Chat = (props) => {
     //  const dispatch = useDispatch();

     //  //방 정보인데 수정 필요할듯
     //  const { roomInfo } = props;
     //  const roomId = roomInfo.roomId;
     //  const headers = {
     //       Authorization: sessionStorage.getItem("token"),
     //  };
     //  const [message, setMessage] = useState("");

     //룸 리스트 가져오기
     // const roomList = useSelector((state) => state.room.lists)

     // 채팅 로그
     // const chattingList = useSelector((state) => state.chatList.list);

     // useEffect(() => {
     //      dispatch(__getRoomList(roomId));
     //      connect();
     // }, [roomId])

     // 클라이언트 객체 생성
     // const sock = new SockJS("/chat")
     // const client = StompJS.over(sock);

     // const connect = () => {
     //      client.connect(headers, onConnected, onError);
     // }

     // const onConnected = () => {
     //      client.subscribe(`/sub/api/chat/room/${roomId}`,
     //           function (content) {
     //                if (content.body) {
     //                     const new_Message = JSON.parse(content.body);
     //                     dispatch(__getUserChatList(new_Message));
     //                } else {
     //                     alert("메세지를 입력하세요");
     //                }
     //           }, headers
     //      )
     // }

     // const onError = (err) => {
     //      console.log(err)
     // }

     // const chatUserInfo = (list) => {
     //      userInfo({
     //          username: list.username,
     //      })
     //  }

     // const sendMessage = () => {
     //      client.send(`/pub/api/chat/message/${roomId}`, headers, JSON.stringify({
     //           content: "",
     //           desUsername: ""
     //      }))
     //      setMessage();
     // }

     // const onEnterPress = (e) => {
     //      if (e.key == "Enter") {
     //           sendMessage();
     //      }
     // }

     // client.activate();

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
     align-items: center;
`;

const Useranme = styled.div`
     padding: 0 8px;
     font-size: 15px;
     p {
          font-size: 13px;
     }
     P:first-child {
          font-weight: bold;
     }
`;
