import "./share.css";


import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

export default function Share() {
  return (
    <div className="share">
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
          <button className="shareInput"> <a href="/create-post" className="link">What's in your mind</a> </button>
          </div>
        </div>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <ImageOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Image</span>
            </div>
            <div className="shareOption">
              <MovieOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Clip</span>
            </div>
            <div className="shareOption">
              <KeyboardVoiceOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Audio</span>
            </div>
            <div className="shareOption">
              <AttachmentOutlinedIcon htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Attachment</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}



