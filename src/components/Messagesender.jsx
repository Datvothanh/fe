import { InsertEmoticon, PhotoLibrary, VideoCall } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./messagesender.css"
function Messagesender() {
    return (
        <div className="messagesender">
            <div className="messagesender_top">
                <Avatar src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321"/>
                <form>
                    <input type="text" placeholder="Hồng ơi, Bạn đang nghĩ gì thế?"/>
                </form>
            </div>


            <div className="messagesender_bottom">
                <div className="messangerOptions">
                    <VideoCall style={{color:'red'}} fontSize="large"/>
                    <p>Video trực tiếp</p>
                </div>

                <div className="messangerOptions" >
                    <PhotoLibrary style={{color:'lightgreen'}} fontSize="large"/>
                    <p>Ảnh/video</p>
                </div>

                <div className="messangerOptions" >
                    <InsertEmoticon style={{color:'#ffb100'}} fontSize="large"/>
                    <p>Cảm xúc/hoạt động</p>
                </div>
            </div>


        </div>
    )
}

export default Messagesender