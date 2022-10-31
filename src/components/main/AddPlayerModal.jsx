import React from "react";
import styled from "styled-components";

const AddPlayerModal = ({ hide }) => {
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
                         />
                         <button>초대</button>
                         {/* <button onClick={() => {setAddPlayer(addPlayer)}}>초대</button> */}
                    </InviteUserForm>
                    <hr></hr>
                    <UserList>
                         <p>사용자 리스트</p>
                         <li>유저1</li>
                         <li>유저2</li>
                         <li>유저3</li>
                         <li>유저4</li>
                         <li>유저5</li>
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
