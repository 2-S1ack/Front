import styled from "styled-components";
import LogoImg from "../../img/s1ack.png";

function LoginForm() {
     return (
          <StyleLogin>
               <div className="first-s1ack">
                    <p>s1ack을 처음 사용하시나요?</p>
                    <p>계정 생성</p>
               </div>
               <img src={LogoImg} alt="logo" />

               <h2>이메일로 로그인 해보세요</h2>
               <p className="middle-title">
                    <b>직장에서 사용하는 이메일 주소</b>로 로그인하는 걸
                    추천드려요.
               </p>
               <form>
                    <input type="email" placeholder="name@work-mail.com" />
                    <input type="password" placeholder="password" />
                    <button>이메일로 로그인</button>
               </form>
          </StyleLogin>
     );
}

export default LoginForm;

const StyleLogin = styled.div`
     width: 100%;
     height: 850px;
     display: flex;
     flex-direction: column;
     align-items: center;
     .first-s1ack {
          position: absolute;
          right: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
     }
     img {
          width: 150px;
          padding: 20px;
     }
     h2 {
          font-size: 300%;
          font-weight: 800;
     }
     .middle-title {
          padding: 10px 0 30px 0;
          b {
               font-weight: 600;
          }
     }
     form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          input {
               width: 430px;
               height: 45px;
               padding: 0 10px;
               margin: 15px;
          }
          button {
               width: 450px;
               height: 45px;
               padding: 10px;
               margin: 15px;
          }
     }
`;
