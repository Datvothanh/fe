import React from "react";
import Storyreel from "./Storyreel";
import "./feed.css";
import MessageSender from "./Messagesender";
import Post from "./Post";
function FeedMain() {
  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />
      <Post
        photoURL="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321"
        image=""
        username="Nguyễn Thị Thanh Hồng"
        timestamp="12:40 PM"
        message="This is test message"
      />
      <Post
        photoURL="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321"
        image="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/379580420_260159446987308_4087590438946924644_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=49d041&_nc_ohc=gYn6_Xl3WYAAX9-63W5&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfB81krJ7yobiosop6mu-YRMOBKnYiJLtkd9tDBzfO6Iyg&oe=650EB0A7"
        username="Nguyễn Thị Thanh Hồng"
        timestamp="01:40 PM"
        message="Bray & Baby Red"
      />
    </div>
  );
}

export default FeedMain;
