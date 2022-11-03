import { useState } from "react";
import styled from "styled-components";
import EditProfModal from "./EditProfModal";

const ProfileModal = () => {
     const [modalOn, setModalOn] = useState(false);
     const userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
     return (
          <MyprofileWrap>
               <MyProfileImg>
                    <img src="/images/default.PNG" />
                    <div>
                         <span>{userinfo.username}</span>
                         <span>🟢 대화 가능</span>
                    </div>
               </MyProfileImg>
               <ProfileState>😊 상태 업데이트</ProfileState>
               <StateChange>
                    <span>자신을 자리비움(으)로 설정</span>
                    <span>알림 일시 중지</span>
               </StateChange>
               <hr></hr>
               <ProfileSetting>
                    <span
                         onClick={() => {
                              setModalOn(!modalOn);
                         }}
                    >
                         프로필
                    </span>
                    {modalOn && (
                         <EditProfModal
                              hide={() => {
                                   setModalOn(false);
                              }}
                         />
                    )}
                    <span>환경 설정</span>
               </ProfileSetting>
               <hr></hr>
               <LogOut>
                    <span>로그아웃</span>
               </LogOut>
          </MyprofileWrap>
     );
};

export default ProfileModal;

const MyprofileWrap = styled.div`
     width: 250px;
     height: 315px;
     background-color: #f8f8f8;
     position: fixed;
     z-index: 1;
     top: 40px;
     right: 15px;
     border-radius: 10px;
     box-shadow: 0 0 5px black;
     hr {
          margin-top: 15px;
     }
`;

const MyProfileImg = styled.div`
     width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
     margin: 15px 20px;
     img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 5px;
     }
     div {
          display: flex;
          align-items: center;
          flex-direction: column;
          span:first-child {
               margin: 0 auto 0 0;
               font-size: 16px;
          }
          span:last-child {
               font-size: 12px;
          }
     }
`;

const ProfileState = styled.div`
     width: 90%;
     height: 35px;
     border: 1px solid gray;
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin: auto;
     &:hover {
          filter: brightness(110%);
     }
`;

const StateChange = styled.div`
     width: 90%;
     height: 50px;
     margin: auto;
     margin-top: 10px;
     display: flex;
     flex-direction: column;
     span {
          margin-bottom: 5px;
     }
`;

const ProfileSetting = styled.div`
     width: 90%;
     height: 50px;
     margin: auto;
     margin-top: 10px;
     display: flex;
     flex-direction: column;
     span {
          margin-bottom: 5px;
     }
`;

const LogOut = styled.div`
     width: 90%;
     height: 30px;
     display: flex;
     align-items: center;
     margin: auto;
`;
