import styled from "styled-components";
import LogoImg from "../img/s1ack.png";

function EnterPage() {
     return (
          <StyleEnter>
               <img src={LogoImg} alt="logo" />

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
          margin-top: 100px;
          padding: 10px 0 30px 0;
     }
     button {
          width: 400px;
          height: 45px;
          padding: 10px;
          margin: 15px;
     }
`;
