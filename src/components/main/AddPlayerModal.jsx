import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addUser } from "../../redux/modules/room";
import { AiOutlineClose } from "react-icons/ai";

const AddPlayerModal = ({ hide }) => {
     const dispatch = useDispatch();
     // const {chatRoom} = useSelector((state) => state.channel)
     const [inviteUser, setInviteUser] = useState("");

     // 채널 추가하기(유저초대)
     // const addUser = (e) => {
     //      e.preventDefault();
     //      dispatch(__addUser())
     // }

     // const onChange = (e) => {
     //      e.preventDefault();
     //      setInviteUser(e.target.value);
     // }

     // const onInviteUser = (e) => {
     //      e.preventDefault();
     //      dispatch(__addUser(inviteUser))
     // }

     // useEffect(() => {
     //      dispatch(__addUser())
     // })

     return (
          <>
               <AddPlayerOverlay />
               <AddPlayerWrap>
                    <Header>
                         <span>S1ack에 초대 요청</span>
                         <button onClick={hide}>
                              <AiOutlineClose />
                         </button>
                    </Header>
                    <InviteUserForm>
                         <p>받는 사람 :</p>
                         <input
                              className="invite-fren-style"
                              type="text"
                              placeholder="초대할 아이디를 입력하세요"
                              // onChange={onChange}
                         />
                         <button>요청 보내기</button>
                         {/* <button onClick={() => {setAddPlayer(addPlayer)}}>초대</button> */}
                    </InviteUserForm>
                    <UserList>
                         <p>사용자 리스트</p>
                         <ul>
                              <li>유저1</li>
                              <li>유저2</li>
                              <li>유저3</li>
                              <li>유저4</li>
                              <li>유저5</li>
                         </ul>
                    </UserList>
               </AddPlayerWrap>
          </>
     );
};

export default AddPlayerModal;

const AddPlayerOverlay = styled.div`
     background-color: rgba(0, 0, 0, 0.6);
     z-index: 1;
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
`;

const AddPlayerWrap = styled.div`
     width: 650px;
     height: 425px;
     border: 1px solid gray;
     border-radius: 5px;
     position: fixed;
     /* top: 22%;
     left: 40%; */
     top: 44%;
     left: 53%;
     transform: translate(-50%, -50%);
     z-index: 2;
     background-color: rgb(255, 255, 255);
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
`;

const Header = styled.div`
     position: relative;
     width: 100%;
     height: 70px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px 28px;
     font-size: 22px;
     box-sizing: border-box;
     span {
          font-weight: bolder;
     }
     button {
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
               box-shadow: 0 0 5px black;
          }
     }
`;

const InviteUserForm = styled.form`
     width: 98%;
     height: 17%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding: 0 28px;
     box-sizing: border-box;
     position: relative;
     p {
          font-size: 15px;
          font-weight: bold;
          padding-bottom: 8px;
     }
     .invite-fren-style {
          width: 100%;
          height: 40px;
          padding: 10px;
          border-radius: 5px;
          box-sizing: border-box;
     }
     button {
          position: absolute;
          height: 36px;
          bottom: -265px;
          padding: 0 10px;
          right: 0;
          background-color: #dddddd;
          color: #4d4c4d;
          border: none;
          border-radius: 5px;
          font-weight: bold;
     }
`;

const UserList = styled.div`
     width: cac(100%-28px);
     height: 33%;
     padding: 10px 28px;
     margin-right: 10px;
     p {
          font-size: 15px;
          font-weight: bold;
          padding: 10px 0;
     }
     ul {
          height: 100%;
          overflow-y: scroll;
          padding: 0 10px;
          li {
               padding: 5px 0;
          }
     }
`;
