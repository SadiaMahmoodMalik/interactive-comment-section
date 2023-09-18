import React, { useState } from "react";
import "../styles/CommentSection.css";
import LikeButton from "./LikeButton";

const CommentSection = () => {
  const initialComments = [
    {
      id: 1,
      name: "Maria",
      text: "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
      likes: 0,
      image: <img src="user1.png" alt="User1" />,
    },
    {
      id: 2,
      name: "Alex Benjamin",
      text: "Home sweet home! I’m glad you are back. It’s been two years and I miss the football matches we have together. A lot has changed since you left. Let’s meet at the ground tomorrow evening?",
      likes: 0,
      image: <img src="user2.png" alt="User2" />,
    },
    {
      id: 3,
      name: "Tania",
      text: "Hey bud, welcome back home. It’s so long to see you back again. Would love to hear the traveling stories of yours. Your place or mine?",
      likes: 0,
      image: <img src="user3.png" alt="User3" />,
    },
  ];

   const [comments, setComments] = useState(initialComments);
   const [userComment, setUserComment] = useState("");
   const [replyTo, setReplyTo] = useState(null);

   const handleCommentChange = (e) => {
     setUserComment(e.target.value);
   };
   const handleCommentSubmit = () => {
     if (userComment.trim() === "") return;

     if (replyTo !== null) {
       // This is a reply to an existing comment.
       const newReply = {
         id: comments.length + 1,
         name: "John Doe",
         text: userComment,
         likes: 0,
         image: <img src="user4.png" alt="User" />,
       };

       const updatedComments = comments.map((comment) => {
         if (comment.id === replyTo) {
           return {
             ...comment,
             replies: [...(comment.replies || []), newReply],
           };
         }
         return comment;
       });

       setComments(updatedComments);
       setUserComment("");
       setReplyTo(null);
     } else {
       // This is a new comment.
       const newComment = {
         id: comments.length + 1,
         name: "John Doe",
         text: userComment,
         likes: 0,
         image: <img src="user4.png" alt="User" />,
       };
       setComments([...comments, newComment]);
       setUserComment("");
     }
   };

   const handleCommentDelete = (commentId) => {
     const updatedComments = comments.filter(
       (comment) => comment.id !== commentId
     );
     setComments(updatedComments);
   };

   const handleEnterPress = (e) => {
     if (e.key === "Enter") {
       handleCommentSubmit();
     }
   };
    const handleReply = (commentId) => {
      setReplyTo(commentId);
    };


 
   return (
     <div className="comment-section">
       <div className="comment-section-title">
         <h6 className="headline">Comments</h6>
       </div>
       <div className="comment-boxes">
         {comments.map((comment) => (
           <div key={comment.id} className="comment-box with-drop-shadow">
             <div className="comment-header">
               <div className="comment-avatar">{comment.image}</div>
               <div className="comment-details">
                 <div className="comment-name">{comment.name}</div>
                 <div className="comment-text">{comment.text}</div>
                 <div className="comment-actions">
                   <LikeButton />
                   <p> • </p>

                   <span
                     className="reply-button"
                     onClick={() => handleReply(comment.id)}
                   >
                     Reply
                   </span>

                   {comment.name === "John Doe" && (
                     <span
                       className="delete-text"
                       onClick={() => handleCommentDelete(comment.id)}
                     >
                       Remove
                     </span>
                   )}
                 </div>
               </div>
             </div>
             {comment.replies &&
               comment.replies.map((reply) => (
                 <div key={reply.id} className="comment-box reply">
                   <div className="comment-header">
                     <div className="comment-avatar">{reply.image}</div>
                     <div className="comment-details">
                       <div className="comment-name">{reply.name}</div>
                       <div className="comment-text">{reply.text}</div>
                       <div className="comment-actions">
                         <LikeButton />
                         <p> • </p>
                           <span
                             className="delete-text"
                             onClick={() => {
                                "reply removed"
                             }}
                           >
                             Remove
                           </span>
                         
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             {replyTo === comment.id && (
               <div className="reply">
                 <input
                   type="text"
                   id={`comment-input-${comment.id}`}
                   className="comment-input"
                   placeholder={`Reply to ${comment.name}...`}
                   value={userComment}
                   onChange={handleCommentChange}
                   onKeyDown={handleEnterPress}
                 />
                 <button
                   id="send-button"
                   className="send-button"
                   onClick={handleCommentSubmit}
                 >
                   {" "}
                   <img src="send.svg" alt="Send" />
                 </button>
               </div>
             )}
           </div>
         ))}
         <div className="write-comment">
           <input
             type="text"
             id="comment-input"
             className="comment-input"
             placeholder="Write a comment..."
             value={userComment}
             onChange={handleCommentChange}
             onKeyDown={handleEnterPress}
           />
           <button
             id="send-button"
             className="send-button"
             onClick={handleCommentSubmit}
           >
             <img src="send.svg" alt="Send" />
           </button>
         </div>
       </div>
     </div>
   );
};

export default CommentSection;
