import React, { useEffect, useState } from "react"                          
import styled from "styled-components"
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
import { IoIosAdd, IoMdSend } from "react-icons/io";
// import Stomp from "stompjs";
// import SockJS from "sockjs-client";
import { useDispatch, useSelector } from "react-redux";
import { __addUser, __getChatRoom } from "../../redux/modules/room";
import { __loadMessage } from "../../redux/modules/chat";
import {useParams} from "react-router-dom"


const ChatBox = () => {

    // const dispatch = useDispatch();
    // const {openProfile} = props;
    // const {userInfo} = props;

    // const roomId = useParams();
    // const headers = {"Authorization": sessionStorage.getItem("authorization")};
    
    //메세지 보내기
    // const [message, setMessage] = useState("");

    //채팅로그
    // const chattingList = useSelector((state) => state.chat)

    // useEffect(() => {
    //     if (roomId !== undefined) {
    //         dispatch(__loadMessage(roomId));
    //         connect();
    //         return () => {client.disconnect()}
    //     }
    // }, [roomId])

    // const sock = new SockJS('/chat');
    // const client = Stomp.over(sock);

    // const connect = () => {
    //     client.connect(headers, onConnected, onError);
    // };

    // const onConnected = () => {
    //     client.subscribe(`http://3.35.52.225:8080/sub/chat/room/${roomId}`,
    //     function(message) {
    //         if (message.body) {
    //             const new_Data = JSON.parse(message.body);
    //             dispatch(__addUser(new_Data))
    //         } else {
    //             alert("비어있슴")
    //         }
    //     }, headers
    //     );
    // };

    // const onError = (err) => {
    //     console.log(err)
    // }

    // const sendMessage = () => {
    //     client.send(`http://3.35.52.225:8080/pub/chat/message/${roomId}`, headers, JSON.stringify({
    //         roomId: roomId,
    //         content: message
    //     }));
    //     setMessage("");
    // }


    return (
        <>
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
                    <ChatInput>
                        <input
                        type="text" 
                        // value={message} 
                        placeholder="내용을 입력해주세요."
                        // onKeyPress={onKeyPress}
                        // onChange={(e) => {setMessage(e.target.value)}}
                        />
                    </ChatInput>
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
        </>

    );
}

export default ChatBox;

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

const ChatInput = styled.form`
     width: 98%;
     height: 35px;
     border: none;
     padding: 4px;
     outline: none;
     input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
     }
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
                            