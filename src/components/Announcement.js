import React from "react";

export default function Announcement() {
    const items = [];
  for (let i = 1; i <= 20; i++) {
    items.push(
        <li key={i} className="announcement-list-item">
            <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">Welcome To Uiverse</div>
                <div className="notibody">Contribute to Open Source UI Elements</div>
                <div className="noti-date" > Wed ,Sep 18</div>
            </div>
        </li>
    )
}
  return (

        <ul className='announcement-container' >
            {items}
        </ul>
    
  );
}
