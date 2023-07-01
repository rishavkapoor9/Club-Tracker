import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState, useRef } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DownloadIcon from '@mui/icons-material/Download';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const commentInputRef = useRef(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const handleComment = () => {
    commentInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const addComment = () => {
    if (comment.trim() !== '') {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
      };

      setComments([newComment, ...comments]);
      setComment('');
    }
  };



  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
            <div className="handleDetails">
              <div className="postUsername">Enactus</div>
              <div className="postHandle">enatus_iitr</div>
            </div>
          </div>
          <div className="postTopRight"> <MoreVertIcon /></div>
        </div>
        <img className="postImg" src={post.photo} alt="" />
        <div className="postBottom">
          <div className="postBottomLeft">

            <div onClick={likeHandler} className="likeIcon" style={{ color: isLiked ? 'red' : '#545454' }}>
              <ThumbUpIcon />
              <div className="postLikeCounter">{like}</div>
            </div>
            <div className="commentIcon" onClick={handleComment}>
              <ChatBubbleIcon />
              <div className="postCommentCounter" >{post.comment}</div>
            </div>
            <div className="downloadIcon">
              <DownloadIcon />
              <div className="postDownloadCounter" >9</div>
            </div>
          </div>
          <div className="postText">Post Desc Goes Here</div>
          <div className="commentSection">
            <input className="commentSection" type="text" ref={commentInputRef} onChange={handleInputChange}
              placeholder="Enter your comment..."
            />
            {comments.length > 0 && (
              <div className="commentSection">
                {comments.map((comment, index) => (
                  <p key={index}>
                    <strong>{comment.text}</strong> - {comment.timestamp}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}