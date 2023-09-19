import React from "react";
import "./post.css";
import {  ChatBubbleOutline, MoreHoriz, Public, Share, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
function Post({photoURL , image, message ,username,timestamp}) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topLeft">
          <Avatar src={photoURL} />
          <div className="postInfo">
            <h6>{username}</h6>
            <p>
              {timestamp} <Public />
            </p>
          </div>
        </div>
        <MoreHoriz />
      </div>
      <div className="post__middle">
        <p>{message}</p>
        { image && <img src={image} />}
      </div>
      <div className="post__bottom">
        <div className="post__bottomOptions">
            <ThumbUp /> <p>Like</p>
        </div>
        <div className="post__bottomOptions">
            <ChatBubbleOutline/> <p>Comment</p>
        </div>
        <div className="post__bottomOptions">
            <Share/> <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
