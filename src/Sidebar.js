import React from "react";
import ReactDOM from "react-dom";
import  './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
        <div className="sidebar">
            {/*Twitter icon*/}
            <TwitterIcon className="sidebar__twitterIcon" />
            {/*  SidebarOption  */}
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon = {NotificationsNoneIcon} text="Notification"/>
            <SidebarOption Icon = {MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon = {BookmarkBorderIcon} text="Bookmark"/>
            <SidebarOption Icon = {ListAltIcon} text="Lists"/>
            <SidebarOption Icon = {PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon = {MoreHorizIcon} text="More"/>
            
            {/*  SidebarOption  */}
            {/*  SidebarOption  */}
            {/*  SidebarOption  */}
            {/*  SidebarOption  */}
            {/*  SidebarOption  */}

        {/*    Button->to twit*/}
        <Button variant="outlined" className='sidebar__tweetButton' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;