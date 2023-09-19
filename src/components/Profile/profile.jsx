import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import UserInfo from "./UserInfo";
import Feeds from "./Feeds";
function Profile() {
  let { UserId } = useParams();
  return (
    <div className="MainProfileDiv">
      <div className="profile-container">
        <div className="top-portion">
          <div className="user-profile-bg-image">
            <img
              id="prf-bg-img"
              src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/368115631_2056523434681407_1183047276697561653_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=fns8a2Tlwv4AX_fPRQz&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBLMSYBS5HQ6h2VBsVZ1V5onZiliV3JBnXdmX7QFJb1dg&oe=6509C6B3"
              alt=""
              srcSet=""
            />
          </div>
          <div className="user-profile-img">
            <img
              id="prf-img"
              src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321"
              alt=""
              srcSet=""
            />
          </div>
          <div className="userName">Nguyễn Thị Thanh Hồng</div>
        </div>
      </div>
      <div className="profile-bottom-container">
        <div className="bottom-portion">
          <div className="right-side">
            <UserInfo />
          </div>
          <div className="left-side">
            <Feeds />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
