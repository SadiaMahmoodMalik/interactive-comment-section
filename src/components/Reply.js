import React, { useState } from "react";
import LikeButton from "./LikeButton";

const Reply = ({ reply, onReplySubmit }) => {
  const [replyText, setReplyText] = useState("");

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyText.trim() === "") return; // for blank replies

    // Create a new reply comment object
    const newReply = {
      id: reply.id * 1000 + reply.replies.length + 1,
      name: "John Doe", // Assuming you are replying as "John Doe"
      text: replyText,
      likes: 0,
      image: <img src="user4.png" alt="User" />,
    };

    // Add the reply to the parent comment's replies array
    reply.replies.push(newReply);

    // Clear the reply input field
    setReplyText("");

    // Callback to notify the parent component (Comment) about the reply submission
    onReplySubmit();
  };

  return (
    <div className="comment-box reply">
      <div className="comment-header">
        <div className="comment-avatar">{reply.image}</div>
        <div className="comment-details">
          <div className="comment-name">{reply.name}</div>
          <div className="comment-text">{reply.text}</div>
          <LikeButton />
        </div>
      </div>
      <div className="reply-input">
        <textarea
          className="comment-input"
          type="text"
          placeholder="Write your reply"
          value={replyText}
          onChange={handleReplyChange}
        />
        <button className="send-button" onClick={handleReplySubmit}>
          <img src="send.svg" alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default Reply;
