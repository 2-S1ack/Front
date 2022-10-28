import React from "react";
import styled from "styled-components";
import LogoImg from "../../img/s1ack.png";

function RegisterForm() {
     return (
          <StyleRegister>
               <img src={LogoImg} alt="logo" />
               <h2>이메일로 회원가입을 해주세요</h2>
               <p className="middle-title">
                    <b>직장에서 사용하는 이메일 주소</b>로 회원가입하는 걸
                    추천드려요.
               </p>
               <form>
                    <div>
                         <input type="email" placeholder="name@work-mail.com" />
                         <button type="button">중복확인</button>
                    </div>
                    <div>
                         <input type="tetx" placeholder="이름을 입력헤주세요" />
                         <button type="button">중복확인</button>
                    </div>
                    <div>
                         <input
                              className="pass-input"
                              type="password"
                              placeholder="password"
                         />
                    </div>
                    <div>
                         <input
                              className="pass-input"
                              type="password"
                              placeholder="password check"
                         />
                    </div>
                    <button>회원가입</button>
               </form>
               <div className="use-s1ack">
                    <p>s1ack을 사용해보신 적이 있으신가요?</p>
                    <p>s1ack 로그인</p>
               </div>
          </StyleRegister>
     );
}

export default RegisterForm;

const StyleRegister = styled.div`
     width: 100%;
     height: 850px;
     display: flex;
     flex-direction: column;
     align-items: center;

     img {
          width: 150px;
          padding: 20px;
     }
     h2 {
          font-size: 300%;
          font-weight: 800;
          margin-top: 20px;
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
          gap: 5px;
          div {
               display: flex;
               align-items: center;
               width: 480px;
               height: 45px;
               padding: 0 10px;
               margin: 10px;
               input {
                    width: 80%;
                    height: 45px;
                    padding: 0 10px;
                    margin: 10px;
               }
               button {
                    width: 20%;
                    height: 50px;
               }
               .pass-input {
                    width: 100%;
               }
          }
          button {
               width: 460px;
               height: 45px;
               padding: 10px;
               margin: 15px;
          }
     }
     .use-s1ack {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px;
     }
`;
