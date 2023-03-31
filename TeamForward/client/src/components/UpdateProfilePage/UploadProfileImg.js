import { useEffect, useState } from "react";
import axios from "axios";
import { userState } from "../../GlobalState";
import { useReactiveVar } from "@apollo/client";

const UploadProfileImg = ({ profileImg, setProfileImg }) => {
    const user = useReactiveVar(userState);

  // 1: if profile img contains cloudinaryimgUrl then preview it

  // 2: if user uploads a new img, then set profileImg() to the base 64 string then preview it


  // try to see if you can change state, test uploading new img, then preview original cloudinary img url

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
    // console.log("State in handleFileInputChange", profileImg)
  };

  useEffect(()=>{
    setPreviewSource(profileImg)
    // console.log("useEffect Preview File: ", profileImg)
  })


//   // show state or local file thats uploaded
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); //converts img to string
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setProfileImg(reader.result);
      console.log("New State:", profileImg)
      if (!previewSource) return;
          uploadImage(previewSource);
    };
};


  
//   const handleSubmitFile = (e) => {
//     console.log("handle submit file works");
//     e.preventDefault();
//     if (!previewSource) return;
//     uploadImage(previewSource);
//   };

  const uploadImage = async (base64EncodedImage) => {
    console.log("Upload Img works:",base64EncodedImage);
  };

  return (
    <div>
      <h1>Upload an Image</h1>
      <form >
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "150px" }} />
      )}
    </div>
  );
};

export default UploadProfileImg;
