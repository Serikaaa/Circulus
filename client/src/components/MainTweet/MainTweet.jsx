import React, { useState, useEffect } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
const MainTweet = (setOpen) => {

  const { currentUser } = useSelector((state) => state.user);

  const [data, setData] = useState({
    userId: "",
    description:"",
    picture: "",
  });

  const handleChange=({currentTarget: input}) => {
    setData({...data,[input.name]: input.value});
  }
  const [img, setImg] = useState(null);
  const [imgUploadProgress, setImgUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: data.description,
        picture: localStorage.getItem('url')

      });
      localStorage.removeItem('url');
      console.log("sumbittwweet"+ submitTweet);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }; 
  
  const uploadImg = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgUploadProgress(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URl
         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          localStorage.setItem("url",downloadURL);
          console.log("downloaded " + downloadURL);
        });
      }
    );
  };
  useEffect(() => {
    img && uploadImg(img);
  }, [img]);
  
  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}

      <form className="border-b-2 pb-6" onSubmit={handleSubmit}>
        <textarea
          className="bg-slate-200 rounded-lg w-full p-2"
          type="text"
          placeholder="What's happening"
          name="description"
          onChange={handleChange}
          value={data.description}
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full float-right ml-auto" >
					POST
				</button>

        <button
            onClick={() =>setOpen(false)}
            className="absolute top-3 right-3 cursor-pointer"
        >
        </button>
          {imgUploadProgress > 0 ? (
          "Uploading " + imgUploadProgress + "%"
        ) : (
          <input
            type="file"
            className="bg-transparent border border-slate-500 rounded p-2"

            onChange={(e) => setImg(e.target.files[0])}
            value={data.picture}
          />
        )}
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;