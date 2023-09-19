import React from "react";
import "./Feeds.css";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { AddAPhoto, Label } from "@mui/icons-material";
import { Flag } from "@mui/icons-material";
function Feeds() {
  const [UserPostDescrip, setUserPostDescrip] = useState("");
  const handleButtonClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Main-Feeds-Container">
      <div className="top-container">
        <div className="feed-input-container">
          <div className="avatar-container">
            <Avatar src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321"></Avatar>
          </div>
          <div className="input-container">
            <input
              id="Post-Desc"
              placeholder=" Bạn đang nghĩ gì?"
              value={UserPostDescrip}
              onChange={(e) => {
                setUserPostDescrip(e.target.value);
              }}
            />
          </div>
        </div>
        {/* <div className="feed-post-button-container">
                <Button onClick={handleButtonClick}>Post</Button>
            </div> */}
        <hr id="hr-id" />
        <div className="iconButtons_actions">
          <div className="icon_button_actions">
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <h5 className="actions_button_text">Video trực tiếp</h5>
          </div>
          <div className="icon_button_actions">
            <label htmlFor="Upload_file">
              <input
                type="file"
                accept="image/*,video/*"
                id="Upload_file"
                hidden="true"
              />
              <IconButton id="AddAPhoto" component="span">
                <AddAPhoto />
              </IconButton>
            </label>

            <h5 className="actions_button_text">Ảnh/Video</h5>
          </div>
          <div className="icon_button_actions">
            <IconButton id="Flag">
              <Flag />
            </IconButton>
            <h5 className="actions_button_text">Sự kiện trong đời</h5>
          </div>
        </div>
      </div>
      <div className="bottom-container"></div>
    </div>
  );
}

export default Feeds;
