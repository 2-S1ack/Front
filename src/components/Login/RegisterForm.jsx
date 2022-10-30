import React from "react";
import styled from "styled-components";

function RegisterForm() {
     return (
          <StyleRegister>
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
                    <button className="signup">회원가입</button>
               </form>
               <div className="use-s1ack">
                    <p>이미 s1ack을 사용하고 있나요?</p>
                    <a href="/">s1ack 로그인</a>
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

     h2 {
          font-size: 300%;
          font-weight: 800;
          margin-top: 5px;
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
          div {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 420px;
               height: 45px;
               margin-bottom: 20px;
               input {
                    width: 80%;
                    height: 44px;
                    padding: 0 10px;
                    border-radius: 3px;
                    border: none;
                    outline: 1px solid #888;
               }
               input:focus {
                    border-radius: 3px;
                    border: none;
                    outline: 3px solid cornflowerblue;
               }
               button {
                    width: 20%;
                    height: 48px;
                    color: #4a154b;
                    background-color: white;
                    font-weight: 800;
                    border: 2px solid #4a154b;
                    border-radius: 3px;
                    margin-left: 10px;
                    cursor: pointer;
               }
               button:hover {
                    color: white;
                    background-color: #4a154b;
                    border: none;
               }
               .pass-input {
                    width: 100%;
               }
          }
          .signup {
               width: 420px;
               height: 44px;
               padding: 0 16px 3px;
               margin-bottom: 20px;
               font-size: 18px;
               color: white;
               background-color: #4a154b;
               border: none;
               border-radius: 3px;
               cursor: pointer;
          }
          .signup:hover {
               background-color: #703578;
          }
     }
     .use-s1ack {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 15px;
          margin-top: 24px;
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
`;
