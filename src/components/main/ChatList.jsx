import React from "react";
import styled from "styled-components";

const ChatList = () => {
    return (
        <ChatListContainer>        
            <Workspace>S1ack</Workspace>
            <ChannelWrap>
                <ChannelButton>▶</ChannelButton>
                <span>채널</span>
            </ChannelWrap>
            <DirectWrap>
                <DirectButton>▶</DirectButton>
                <span>다이렉트 메세지</span>
                {/* <AddPlayer>
                    <span>➕</span>
                    <span>팀원 추가</span>
                </AddPlayer> */}
            </DirectWrap>
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
    height: 30%;
    padding: 25px;
    span {
        color: #C6B7C6;
        font-weight: bold;
        margin-left: 10px;
    }
`;

const ChannelButton = styled.div`
    width: 10px;
    height: 10px;
    display: inline;
    color: #C6B7C6;
    font-weight: bold;
`;

const DirectWrap = styled.div`
    width: 100%;
    height: 30%;
    padding: 25px;
    span {
        color: #C6B7C6;
        font-weight: bold;
        margin-left: 10px;
    }
`;

const DirectButton = styled.div`
    width: 10px;
    height: 10px;
    display: inline;
    color: #C6B7C6;
    font-weight: bold;
`;

const AddPlayer = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10px;
    button {
        width: 20px;
        height: 20px;
    }
`;