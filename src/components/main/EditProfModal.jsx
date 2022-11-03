import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { _patchProfile } from "../../redux/modules/profileSlice";

const EditProfModal = ({ hide }) => {
     const dispatch = useDispatch();

     const [image, setImage] = useState({
          file: "",
          preview_URL:
               "https://ca.slack-edge.com/T01L2TNGW3T-U03V4RE75D1-g5b77b0a15a5-512",
     });
     const [prof, setProf] = useState({ name: "", file: "" });

     const userinfo = JSON.parse(sessionStorage.getItem("userinfo"));

     // console.log(userinfo.username);

     let inputRef;

     const onChangeHandler = (e) => {
          const name = e.target.value;
          setProf({ ...prof, name });
     };

     const saveImage = (e) => {
          e.preventDefault();
          if (e.target.files[0]) {
               URL.revokeObjectURL(image.preview_URL);
               const preview_URL = URL.createObjectURL(e.target.files[0]);

               setImage(() => ({
                    file: e.target.files[0],
                    preview_URL: preview_URL,
               }));
          } else {
               const preview_URL = URL.createObjectURL(e.target.files[0]);

               setImage(() => ({
                    file: e.target.files[0],
                    preview_URL: preview_URL,
               }));
          }
          setProf({ ...prof, file: image.preview_URL });
     };
     useEffect(() => {
          // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          return () => {
               URL.revokeObjectURL(image.preview_URL);
          };
     }, [image.preview_URL]);

     const onPatchHandler = () => {
          let formData = new FormData();
          formData.append("file", image.file);
          formData.append(
               "formData",
               new Blob([JSON.stringify(prof)], { type: "application/json" })
          );
          dispatch(_patchProfile({ formData }));
          alert("완료");
          //콘솔식
          for (let value of formData.values()) {
               console.log(value);
          }
     };

     return (
          <>
               <AddPlayerOverlay />
               <EditProfWrap>
                    <div className="prof-arr-style">
                         <div className="prof-header-style">내 프로필 편집</div>
                         <div className="prof-info-style">
                              <div className="prof-info-name-style">
                                   <p>성명</p>
                                   <input
                                        type="text"
                                        name="name"
                                        defaultValue={userinfo.username}
                                        onChange={onChangeHandler}
                                   />
                              </div>
                              <div className="prof-info-img-style">
                                   <p>프로필사진</p>
                                   <img src={image?.preview_URL} alt="" />
                                   <input
                                        className="img-input-none"
                                        type="file"
                                        accept="image/*"
                                        name="file"
                                        onChange={saveImage}
                                        ref={(refParam) =>
                                             (inputRef = refParam)
                                        }
                                   />
                                   <button
                                        type="button"
                                        onClick={() => inputRef.click()}
                                   >
                                        사진 업로드
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="prof-info-btn-style">
                         <button
                              className="prof-cancel-btn-style"
                              onClick={hide}
                         >
                              취소
                         </button>
                         <button
                              className="prof-ok-btn-style"
                              onClick={onPatchHandler}
                         >
                              변경사항 저장
                         </button>
                    </div>
               </EditProfWrap>
          </>
     );
};

export default EditProfModal;

const AddPlayerOverlay = styled.div`
     background-color: rgba(0, 0, 0, 0.6);
     z-index: 0;
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
`;

const EditProfWrap = styled.div`
     width: 700px;
     height: 500px;
     border: 1px solid gray;
     border-radius: 5px;
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     z-index: 10;
     background-color: white;
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: flex-end;

     .prof-arr-style {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .prof-header-style {
               padding: 20px 28px;
               font-size: 22px;
               font-weight: bold;
          }
          .prof-info-style {
               display: flex;
               padding: 0 28px;

               .prof-info-name-style {
                    width: 420px;
                    display: flex;
                    flex-direction: column;
                    margin-right: 32px;
                    p {
                         font-size: 15px;
                         font-weight: bold;
                         padding-bottom: 10px;
                    }
                    input {
                         width: 420px;
                         height: 44px;
                         padding: 11px 12px 13px;
                         box-sizing: border-box;
                    }
               }
               .prof-info-img-style {
                    width: 192px;
                    p {
                         font-size: 15px;
                         padding-bottom: 8px;
                    }
                    img {
                         width: 100%;
                         height: 192px;
                         object-fit: cover;
                    }
                    button {
                         width: 192px;
                         height: 36px;
                         padding: 0 12px 1px;
                         margin-top: 8px;
                         border: 1px solid #bbbabb;
                         border-radius: 5px;
                    }
                    .img-input-none {
                         display: none;
                    }
               }
          }
     }
     .prof-info-btn-style {
          width: 700px;
          height: 84px;
          padding: 24px 28px;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          .prof-cancel-btn-style {
               width: 80px;
               height: 36px;
               margin-right: 12px;
               padding: 0 12px 1px;
               border: 1px solid #bbbabb;
               border-radius: 5px;
               font-size: 15px;
               font-weight: bold;
          }
          .prof-ok-btn-style {
               width: fit-content;
               height: 36px;
               padding: 0 12px 1px;
               background-color: #007a5a;
               border-radius: 5px;
               font-size: 15px;
               font-weight: bold;
               color: white;
          }
     }
`;
