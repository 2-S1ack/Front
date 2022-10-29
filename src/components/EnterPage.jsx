import styled from "styled-components";
import LogoImg from "../img/s1ack.png";

function EnterPage() {
     return (
          <StyleEnter>
               <h2>만나게 되어 반가워요. 오늘 멋지시네요!</h2>
               <p className="middle-title">
                    아래의 버튼을 눌러 s1ack을 시작해주세요.
               </p>

               <button>s1ack 시작하기</button>
          </StyleEnter>
     );
}
export default EnterPage;

const StyleEnter = styled.div`
     width: 100%;
     height: 850px;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;

     h2 {
          font-size: 300%;
          font-weight: 800;
          margin-top: 5px;
     }
     .middle-title {
          margin-top: 50px;
          padding: 10px 0 30px 0;
     }
     button {
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
     button:hover {
          background-color: #703578;
     }
`;
