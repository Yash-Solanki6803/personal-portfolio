"use client";

import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import Loader from "@/ui/Loader/Loader";
import { FaCopy } from "react-icons/fa";

function UploadImage() {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      setLoading(true);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("url", url);
            setDownloadURL(url);
            setLoading(false);
          });
        }
      );
    };
    file && upload();
  }, [file]);
  return (
    <>
      <div className="text-white bg-slate-950 w-full  h-full flex gap-2 items-center justify-between rounded-md  focus:outline-none font-light placeholder:font-medium ">
        <input
          className="hidden"
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
        />
        <button
          // disabled={loading || (media && file)}
          className="bg-slate-800 hover:bg-slate-900 transition-all h-full   duration-200 disabled:cursor-not-allowed appearance-none rounded-lg cursor-pointer focus:outline-none flex items-center"
        >
          <label
            className=" h-full w-full px-4 py-4 cursor-pointer "
            htmlFor="image"
          >
            {loading ? <Loader size={5} /> : "Add"}
          </label>
        </button>
        <p className="w-32 sm:w-60 md:w-32 xl:w-72 h-12 flex items-center whitespace-nowrap overflow-x-auto text-xs">
          {downloadURL || "IMAGE URL fill be shown here"}
        </p>
        <button
          className=" hover:text-green-300  transition-all h-full px-4  duration-100 disabled:cursor-not-allowed appearance-none rounded-lg cursor-pointer focus:outline-none flex items-center"
          onClick={() => navigator.clipboard.writeText(downloadURL)}
        >
          <FaCopy />
        </button>
      </div>
    </>
  );
}

export default UploadImage;
