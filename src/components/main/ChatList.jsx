import React, {useState} from "react";
import styled from "styled-components";
import AddPlayerModal from "./AddPlayerModal";

const ChatList = () => {

    const [addPlayer, setAddPlayer] = useState(false);
    
    return (
        <ChatListContainer>        
            <Workspace>S1ack</Workspace>
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
                    <p>유저1</p>
                    <p>유저2</p>
                    <p>유저3</p>
                    <button onClick={() => {setAddPlayer(!addPlayer)}}>➕</button>
                    <span>팀원 추가</span>
                </details>
            </DirectWrap>
            {addPlayer && <AddPlayerModal hide={() => {setAddPlayer(false)}} />}
        </ChatListContainer>
    );
}

export default ChatList;

const ChatListContainer = styled.div`
    width: 18%;
    height: 100%;
    background-color: #3F0E40;
    margin: 0 auto 0 0;
`;

const Workspace = styled.div`
    width: 100%;
    height: 50px;
    background-color: #3F0E40;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    color: #FFFEF8;
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChannelWrap = styled.div`
    width: 100%;
    height: 40%;
    padding: 15px;
    display: flex;
    details {
        color: #C6B7C6;
        font-weight: bold;
        margin-left: 10px;
        p {
            margin-left: 15px;
            margin-top: 5px;
        }
    }
`;

const DirectWrap = styled.div`
    width: 100%;
    height: 40%;
    padding: 15px;
    display: flex;
    details {
        color: #C6B7C6;
        font-weight: bold;
        margin-left: 10px;
        p {
            margin-left: 15px;
            margin-top: 5px;
        }
        button {
            cursor: pointer;
            width: 25px;
            height: 25px;
            background: none;
            border: none;
            margin-left: 10px;
        }
    }
`;
