import { useEffect, useState } from "react";
import axios from "axios";
import { userState } from "../../GlobalState";
import { useReactiveVar } from "@apollo/client";


const UploadProfileImg = ({ profileImg, setProfileImg }) => {
  const user = useReactiveVar(userState);

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState(profileImg);
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); //converts img to string
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setProfileImg(reader.result); // set base64 url to state
      // console.log("New State:", profileImg)
      if (!previewSource) return;
      uploadImage(previewSource);
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    // console.log("Upload Img works:", base64EncodedImage);
  };

  return (
    <form className="flex items-center space-x-6 mt-8 mb-10">
      <div className="shrink-0">
      { previewSource ? 
        <img src={previewSource} alt="chosen"  className="object-cover w-32 h-32 rounded-full" /> : 
        <img
          className="object-cover w-32 h-32 rounded-full"
          src={"https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"}
          alt="empty profile photo"
        />
      }
        
      </div>
      <label className="block">
        <span className="sr-only">Choose File</span>
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:text-white file:font-semibold file:bg-green-900 file:text-white hover:file:bg-green-700"
        />
      </label>
    </form>

    
  );
};
{
}

export default UploadProfileImg;
