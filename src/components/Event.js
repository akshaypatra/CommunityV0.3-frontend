import React from "react";

export default function Event() {

  const items = [];
  for (let i = 1; i <= 20; i++) {
    items.push(
    <li key={i} className="event-card-list-item">
        <div className="event-card">
              <div className="event-header">
                <span className="event-icon">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="event-alert">Smart India Hackathon </p>
              </div>

              <p className="event-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
                unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
              </p>

              <div className="event-actions">
                <a className="event-read" href="/">
                  Take a Look
                </a>

                <a className="event-mark-as-read" href="/">
                  Register
                </a>
              </div>
            </div>
    
    </li>
  );
  }

  return (
    <div className="event-container">
       <h1 className="event-container-header">Upcoming Events !   <input type='text' id='event-search-bar' placeholder='Search Event ....'  ></input> </h1>
          <ul className="event-card-container">
            {items} 
            
          </ul>
         
    </div>
  );
}
