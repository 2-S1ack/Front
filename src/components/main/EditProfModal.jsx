import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _patchProfile } from "../../redux/modules/profileSlice";

const EditProfModal = ({ hide }) => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

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
          setProf({ ...prof, name: name });
          //console.log(e.target.value);
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
          if (prof.name === "" || prof.file === "") {
               alert("이름과 사진 업로드를 완료해주세요.");
          } else {
               let formData = new FormData();
               formData.append("file", image.file);
               formData.append("name", prof.name);
               console.log("test", prof.name);
               dispatch(_patchProfile(formData));
               alert("완료");
               window.location.replace("/main");
               // //콘솔식
               // for (let value of formData.values()) {
               //      console.log(value);
               // }
          }
     };


     const initialState = {
          name: ""
      };
      const userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
  
      const [profileName, setProfileName] = useState(initialState);
      const [profileImg, setProfileImg] = useState("");
  
      const changeImg = (e) => {
        setProfileImg(URL.createObjectURL(e.target.files[0]));
      };
  
      const onChangeNameHandler = (e) => {
          const {name, value } = e.target;
          setProfileName({...profileName, [name]: value});
      };
  
      const onChangeProfile = (e) => {    
        e.preventDefault();
        
        let formData = new FormData();
        let profileImage = document.getElementById("img_file");
        formData.append("name", new Blob([JSON.stringify(profileName)], {type: "application/json"}));
        formData.append("file", profileImage.files[0]);
        dispatch(_patchProfile(formData));
      };

     
  
     // const [image, setImage] = useState({
     //      file: "",
     //      preview_URL:
     //           "https://ca.slack-edge.com/T01L2TNGW3T-U03V4RE75D1-g5b77b0a15a5-512",
     // });
     // const [prof, setProf] = useState({ name: "", file: "" });

     // const userinfo = JSON.parse(sessionStorage.getItem("userinfo"));

     // // console.log(userinfo.username);

     // let inputRef;

     // const onChangeHandler = (e) => {
     //      const name = e.target.value;
     //      setProf({ ...prof, name });
     // };

     // const saveImage = (e) => {
     //      e.preventDefault();
     //      if (e.target.files[0]) {
     //           URL.revokeObjectURL(image.preview_URL);
     //           const preview_URL = URL.createObjectURL(e.target.files[0]);

     //           setImage(() => ({
     //                file: e.target.files[0],
     //                preview_URL: preview_URL,
     //           }));
     //      } else {
     //           const preview_URL = URL.createObjectURL(e.target.files[0]);

     //           setImage(() => ({
     //                file: e.target.files[0],
     //                preview_URL: preview_URL,
     //           }));
     //      }
     //      setProf({ ...prof, file: image.preview_URL });
     // };
     // useEffect(() => {
     //      // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
     //      return () => {
     //           URL.revokeObjectURL(image.preview_URL);
     //      };
     // }, [image.preview_URL]);

     // const onPatchHandler = () => {
     //      let formData = new FormData();
     //      formData.append("file", image.file);
     //      formData.append(
     //           "formData",
     //           new Blob([JSON.stringify(prof)], { type: "application/json" })
     //      );
     //      dispatch(_patchProfile({ formData }));
     //      alert("완료");
     //      //콘솔식
     //      for (let value of formData.values()) {
     //           console.log(value);
     //      }
     // };

     return (
          <>
               <AddPlayerOverlay />
               <EditProfWrap enctype="multipart/form-data" onSubmit={onChangeProfile}>
                    <div className="prof-arr-style">
                         <div className="prof-header-style">내 프로필 편집</div>
                         <div className="prof-info-style">
                              <div className="prof-info-name-style">
                                   <p>닉네임</p>
                                   <input
                                        type="text"
                                        name="name"
                                        value={profileName.username}
                                        onChange={onChangeNameHandler}
                                   />
                              </div>
                              <div className="prof-info-img-style">
                                   <p>프로필사진</p>
                                   <img src={profileImg ? profileImg : "images/profile.png"} alt="이미지가 없습니다"/>
                                   <Label htmlFor="img_file">사진 선택</Label>
                                   <input
                                        id="img_file"
                                        className="img-input-none"
                                        type="file"
                                        accept="image/*"
                                        onChange={changeImg}
                                   />

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
                              type="submit"
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

const EditProfWrap = styled.form`
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

const Label = styled.label`
     width: 200px;
     width: 30px;
     border: 1px solid gray;
     border-radius: 10px;
`;