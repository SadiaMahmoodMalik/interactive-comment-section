import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button-container">
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLikeClick}
        style={{
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="#E33E38"
          >
            {
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.447 0.957269C12.7345 -0.502078 10.1877 -0.239583 8.61584 1.38226L8.00023 2.01662L7.38462 1.38226C5.8159 -0.239583 3.26595 -0.502078 1.55348 0.957269C-0.408984 2.63224 -0.512107 5.63843 1.24411 7.45402L7.29087 13.6976C7.68149 14.1008 8.31585 14.1008 8.70647 13.6976L14.7532 7.45402C16.5126 5.63843 16.4094 2.63224 14.447 0.957269Z"
                  fill="#E33E38"
                />
              </svg>
            }
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="#C2C2C2"
          >
            {
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.325 1.00979C12.5187 -0.508552 9.72812 -0.280489 8 1.47841C6.27187 -0.280489 3.48125 -0.511676 1.675 1.00979C-0.674996 2.98737 -0.331246 6.21149 1.34375 7.9204L6.825 13.5033C7.1375 13.8219 7.55625 14 8 14C8.44687 14 8.8625 13.825 9.175 13.5064L14.6562 7.92353C16.3281 6.21462 16.6781 2.9905 14.325 1.00979ZM13.5875 6.86757L8.10625 12.4504C8.03125 12.5254 7.96875 12.5254 7.89375 12.4504L2.4125 6.86757C1.27188 5.70538 1.04063 3.50598 2.64063 2.15947C3.85625 1.13788 5.73125 1.29096 6.90625 2.48751L8 3.60283L9.09375 2.48751C10.275 1.28471 12.15 1.13788 13.3594 2.15635C14.9562 3.50286 14.7187 5.71475 13.5875 6.86757Z"
                  fill="#C2C2C2"
                />
              </svg>
            }
          </svg>
        )}
      </button>
      <span className={`like-count ${liked ? "liked" : ""}`}>
        {liked ? "1" : "0"}
      </span>
    </div>
  );
};

export default LikeButton;
