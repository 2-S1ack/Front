import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addUser } from "../../redux/modules/room";

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
               {" "}
               <AddPlayerOverlay />
               <AddPlayerWrap>
                    <Header>
                         <span>사용자 초대</span>
                         <button onClick={hide}>❌</button>
                    </Header>
                    <InviteUserForm>
                         <input
                              type="text"
                              placeholder="초대할 아이디를 입력하세요"
                              // onChange={onChange}
                         />
                         <button>초대</button>
                    </InviteUserForm>
                    <hr></hr>
                    <UserList>
                         <p>사용자 리스트</p>
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
     width: 500px;
     height: 500px;
     border: 1px solid gray;
     border-radius: 5px;
     position: fixed;
     top: 22%;
     left: 40%;
     z-index: 2;
     background-color: rgb(255, 255, 255);
`;

const Header = styled.div`
     width: 100%;
     height: 50px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     span {
          margin: 0px 20px;
     }
     button {
          margin: 0px 20px;
          background: none;
          border: none;
          cursor: pointer;
          &:hover {
               box-shadow: 0 0 5px black;
          }
     }
`;

const InviteUserForm = styled.form`
     width: 100%;
     height: 40px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin: 20px 0px;
     input {
          width: 75%;
          height: 30px;
          margin: 0px 20px;
          border-radius: 5px;
     }
     button {
          margin: 0px 20px;
          width: 50px;
          height: 30px;
     }
`;

const UserList = styled.div`
     width: 100%;
     height: 70%;
     p {
          margin: 20px;
     }
     li {
          margin: 20px;
     }
`;
