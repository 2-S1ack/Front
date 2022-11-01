import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
     emailChkChange,
     nameChkChange,
     _postEmailCheck,
     _postNameCheck,
     _postUserJoin,
} from "../../redux/modules/userSlice";

function RegisterForm() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const initialState = {
          email: "",
          username: "",
          password: "",
          passwordConfirm: "",
     };
     const [user, setUser] = useState(initialState);

     const { email, username, password, passwordConfirm } = user;

     //정규식 체크
     const [emailChk, setEmailChk] = useState(false);
     const [unChk, setUnChk] = useState(false);
     // const [pwChk, setPwChk] = useState(false);
     // const [pwConfirmChk, setPwConfirmChk] = useState(false);

     //상태관리를 위한
     const [emInput, setEmInput] = useState("");
     const [pwInput, setPwInput] = useState("");
     const [pwCfmInput, setPwCfmInput] = useState("");
     const [umInput, setUmInput] = useState("");

     const [disabled, setDisabled] = useState(false);

     //정규식
     const regEmail =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
     const regPassword = /^[A-Za-z0-9]{8,16}$/;
     const regUsername = /^[ㄱ-ㅎ|가-힣]{2,8}$/;

     //입력값
     const onChangeSignupHandler = (e) => {
          const { name, value } = e.target;
          setUser({ ...user, [name]: value });

          if (name === "email") {
               !regEmail.test(value)
                    ? setEmInput("이메일 형식을 확인해주세요")
                    : setEmInput("");
          }
          if (name === "username") {
               !regUsername.test(value)
                    ? setUmInput("2-8글자 이내의 한글로 입력해주세요")
                    : setUmInput("");
          }
          if (name === "password") {
               !regPassword.test(value)
                    ? setPwInput("8~16자의 영문 대소문자와 숫자로 입력해주세요")
                    : setPwInput("");
          }
          if (name === "passwordConfirm") {
               password !== value
                    ? setPwCfmInput("비밀번호가 불일치 합니다")
                    : setPwCfmInput("");
          }
     };

     //이메일 중복확인
     const onEmailDbChkHandler = () => {
          if (user.email.trim() === "") {
               setEmailChk(false);
               alert("이메일");
          } else {
               dispatch(_postEmailCheck({ email }));
               setEmailChk(true);
          }
     };

     //닉네임 중복확인
     const onUserDbChkHandler = () => {
          if (user.username.trim() === "") {
               setUnChk(false);
               alert("이름");
          } else {
               dispatch(_postNameCheck({ username }));
               setUnChk(true);
          }
     };

     //회원가입보내기
     const onSubmitJoinHandler = (e) => {
          e.preventDefault();
          if (
               email.trim() === "" ||
               username.trim() === "" ||
               password.trim() === "" ||
               passwordConfirm.trim() === ""
          ) {
               return alert("빈 칸을 입력해주세요");
          } else if (
               !regEmail.test(email) ||
               !regUsername.test(username) ||
               !regPassword.test(password) ||
               password !== passwordConfirm
          ) {
               setDisabled(false);
          } else if (!emailChk) {
               setDisabled(false);
          } else if (!unChk) {
               setDisabled(false);
          } else {
               dispatch(
                    _postUserJoin({
                         email,
                         password,
                         passwordConfirm,
                         username,
                    })
               );
               setDisabled(true);
               alert("가입이 완료 되셨습니다!");
               navigate("/");
          }
     };

     useEffect(() => {
          setDisabled(
               regEmail.test(email) &&
                    regUsername.test(username) &&
                    regPassword.test(password) &&
                    password === passwordConfirm
          );
     }, [
          setDisabled,
          regEmail,
          regPassword,
          regUsername,
          password,
          email,
          username,
          passwordConfirm,
     ]);
     //console.log(regPassword.test(password));
     useEffect(() => {
          if (!regEmail.test(email)) {
               setEmailChk(false);
          }
          dispatch(emailChkChange());
     }, [email, regEmail, dispatch]);

     useEffect(() => {
          if (!regUsername.test(username)) {
               setUnChk(false);
          }
          dispatch(nameChkChange());
     }, [username, regUsername, dispatch]);

     // useEffect(() => {
     //      if (regEmail.test(email)) {
     //           setEmailChk(true);
     //      } else {
     //           setEmailChk(false);
     //      }
     //      dispatch(emailChkChange());
     // }, [email, regEmail, dispatch]);

     // useEffect(() => {
     //      if (regUsername.test(username)) {
     //           setUnChk(true);
     //      } else {
     //           setUnChk(false);
     //      }
     //      dispatch(nameChkChange());
     // }, [username, regUsername, dispatch]);
     return (
          <StyleRegister>
               <h2>이메일로 회원가입을 해주세요</h2>
               <p className="middle-title">
                    <b>직장에서 사용하는 이메일 주소</b>로 회원가입하는 걸
                    추천드려요.
               </p>
               <div className="form-style">
                    <div>
                         <input
                              type="email"
                              name="email"
                              value={email}
                              placeholder="name@work-mail.com"
                              onChange={onChangeSignupHandler}
                         />
                         <button
                              type="button"
                              onClick={onEmailDbChkHandler}
                              className={
                                   emailChk
                                        ? "double-check-btn-true "
                                        : "double-check-btn"
                              }
                         >
                              중복확인
                         </button>
                    </div>
                    <p className="help-join">{emInput}</p>
                    <div>
                         <input
                              type="text"
                              name="username"
                              value={username}
                              placeholder="이름을 입력해주세요"
                              onChange={onChangeSignupHandler}
                         />
                         <button
                              type="button"
                              onClick={onUserDbChkHandler}
                              className={
                                   unChk
                                        ? "double-check-btn-true "
                                        : "double-check-btn"
                              }
                         >
                              중복확인
                         </button>
                    </div>
                    <p className="help-join">{umInput}</p>
                    <div>
                         <input
                              className="pass-input"
                              type="password"
                              name="password"
                              value={password}
                              placeholder="password"
                              onChange={onChangeSignupHandler}
                         />
                    </div>
                    <p className="help-join">{pwInput}</p>
                    <div>
                         <input
                              className="pass-input"
                              type="password"
                              name="passwordConfirm"
                              value={passwordConfirm}
                              placeholder="password check"
                              onChange={onChangeSignupHandler}
                         />
                    </div>
                    <p className="help-join">{pwCfmInput}</p>
                    {disabled ? (
                         <button className="signup">회원가입</button>
                    ) : (
                         <button
                              className="signope"
                              onClick={onSubmitJoinHandler}
                         >
                              회원가입
                         </button>
                    )}
               </div>
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
     .form-style {
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
               .double-check-btn {
                    width: 20%;
                    height: 48px;
                    color: var(--color-login-btn);
                    background-color: white;
                    font-weight: 800;
                    border: 2px solid var(--color-login-btn);
                    border-radius: 3px;
                    margin-left: 10px;
                    cursor: pointer;
               }
               button:hover {
                    color: white;
                    background-color: var(--color-login-btn);
                    border: none;
               }
               .double-check-btn-true {
                    width: 20%;
                    height: 48px;
                    color: white;
                    background-color: var(--color-login-btn);
                    border: none;
                    font-weight: 800;
                    border-radius: 3px;
                    margin-left: 10px;
                    cursor: pointer;
               }
               .pass-input {
                    width: 100%;
               }
          }
          .help-join {
               box-sizing: border-box;
               position: relative;
               width: 420px;
               height: 25px;
               font-size: 11px;
               color: #888;
               margin-top: -15px;
               padding: 0 5px;
          }
          .signup {
               width: 420px;
               height: 44px;
               padding: 0 16px 3px;
               margin-bottom: 20px;
               font-size: 18px;
               color: white;
               background-color: var(--color-login-btn);
               border: none;
               border-radius: 3px;
               cursor: pointer;
          }
          .signope {
               width: 420px;
               height: 44px;
               padding: 0 16px 3px;
               margin-bottom: 20px;
               font-size: 18px;
               color: white;
               background-color: #888;
               border: none;
               border-radius: 3px;
               cursor: pointer;
          }
          .signup:hover {
               background-color: var(--color-login-btn);
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
