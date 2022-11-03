import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginState, _postUserLogin } from "../../redux/modules/userSlice";

function LoginForm() {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const initialState = {
          email: "",
          password: "",
     };

     const [user, setUser] = useState(initialState);

     //로그인 전역상태 불러오기
     const { isLogin } = useSelector((state) => state.userList);

     const onLoginChangeHandler = (e) => {
          const { name, value } = e.target;
          setUser({ ...user, [name]: value });
     };

    

     const onSubmitLoginHandler = (e) => {
          e.preventDefault();
          if (user.email.trim() === "" || user.password.trim() === "") {
               alert("빈 칸을 입력해주세요");
          } else {
               dispatch(
                    _postUserLogin({
                         email: user.email,
                         password: user.password,
                    })
               );
          }
     };

     //로그인할 때 -> main으로 이동
     useEffect(() => {
          isLogin && navigate("/main");
     }, [isLogin, navigate]);

     return (
          <StyleLogin>
               <h2>이메일로 로그인 해보세요</h2>
               <p className="middle-title">
                    <b>직장에서 사용하는 이메일 주소</b>로 로그인하는 걸
                    추천드려요.
               </p>
               <form>
                    <input
                         type="email"
                         placeholder="name@work-mail.com"
                         name="email"
                         onChange={onLoginChangeHandler}
                    />
                    <input
                         type="password"
                         placeholder="password"
                         name="password"
                         onChange={onLoginChangeHandler}
                    />
                    <button onClick={onSubmitLoginHandler}>
                         이메일로 로그인
                    </button>
               </form>
          </StyleLogin>
     );
}

export default LoginForm;

const StyleLogin = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;

     h2 {
          font-size: 48px;
          font-weight: 700;
          margin-top: 5px;
          max-width: 700px;
     }
     .middle-title {
          font-size: 18px;
          line-height: 27px;
          max-width: 700px;
          margin-bottom: 32px;
          b {
               font-weight: 600;
          }
     }
     form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          font-weight: 800;
          input {
               width: 400px;
               height: 44px;
               padding: 0 10px;
               margin-bottom: 20px;
               border-radius: 3px;
               border: none;
               outline: 1px solid #888;
          }
          button {
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
          button:hover {
               background-color: var(--color-login-btn-hover);
          }
     }
`;
