import styled from "styled-components";
import LogoImg from "../../img/s1ack_logo.png";

const SignupBtn = () => {
     if (window.location.pathname !== "/") return null;
     return (
          <div className="first-s1ack">
               <p>s1ack을 처음 사용하시나요?</p>
               <a href="/register">계정 생성</a>
          </div>
     );
};

function LoginHeader() {
     return (
          <StyleLoginHeader>
               <SignupBtn />
               <img src={LogoImg} alt="logo" />
          </StyleLoginHeader>
     );
}

export default LoginHeader;

const StyleLoginHeader = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 30px 0 15px;
     .first-s1ack {
          right: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          position: absolute;
          font-size: 13px;
          a {
               text-decoration: none;
               color: cornflowerblue;
               font-weight: 700;
          }
          a:hover {
               color: blue;
               text-decoration: underline;
          }
     }
     img {
          width: 150px;
     }
`;
