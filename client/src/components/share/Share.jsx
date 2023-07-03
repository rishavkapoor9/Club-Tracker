import "./share.css";


import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { useRef, useState } from "react";
import Axios from "axios";

export default function Share() {
  const imageRef = useRef();
  const videoRef = useRef();
  function imageClick() {
    imageRef.current.click();
  }
  function videoClick() {
    videoRef.current.click();
  }
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [description, setDescription] = useState();
  function submit(event) {
    Axios.post("http://localhost:4000/api/createPost", { image: image, video: video, description: description }).then(() => {

      // Axios.get("http://localhost:4000/login")
      //   .then(response => {
      //     if (response.data.isAuthenticated) {
      //       setLogin(true)
      //       props.updateUser(response.data.user);
      //       // alert(response.data.user.admin);
      //     } else {
      //       console.log("not logged in")
      //     }
      //   })
      //   .catch(error => {
      //     console.error("Error occurred:", error);
      //   });
    })
      .catch(error => {
        console.error("Error occurred:", error);
      });

    event.preventDefault();
  }
  return (
    <div className="share">
      <input type="file" ref={imageRef} accept="image/*" onChange={e => setImage(e.target.files[0])} />
      <input type="file" ref={videoRef} accept="video/*" onChange={e => setVideo(e.target.files[0])} />
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="user-handel">
            <div className="initials2">
              <div className="handleUsername2">Enactus IIT Roorkee</div>
              <div className="handleAccount2">enactus_iitr</div>
            </div>
            <img className="shareProfileImg2" src="/assets/person/1.jpeg" alt="" />
          </div>
          <div className="postField">
            <textarea className="shareInput" placeholder="What's in your mind?" name="description" onChange={e => { setDescription(e.target.value) }} />
          </div>
        </div>
        <div className="shareBottom">
          <div className="shareOptions shareOptions1">
            <div className="shareOption" onClick={imageClick}>
              <ImageOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Image</span>
            </div>
            <div className="shareOption" onClick={videoClick}>
              <MovieOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Clip</span>
            </div>
            {/* <div className="shareOption">
              <KeyboardVoiceOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Audio</span>
            </div>
            <div className="shareOption">
              <AttachmentOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Attachment</span>
            </div> */}
          </div>
          <div className="shareoptions shareOptions2">
            <button className="shareButton" onClick={submit}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}



