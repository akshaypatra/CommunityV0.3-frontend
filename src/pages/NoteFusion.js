import React from 'react'
import { useState,useEffect } from 'react';

export default function NoteFusion() {

  const [material, setMaterial] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const jsonData = [
          {
            id: "1",
            Subject: "Computer Networks",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1AeC1Y7mj_yh0Ui77kF-PNEOl6jZgNA_g",
          },
          {
            id: "2",
            Subject: "Theory of Computation",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1D4ib4-ZINOeWVuPyTbpDtbAHRcN0Ym8Y",
          },
          {
            id: "3",
            Subject: "Integral Calculus and Transform techniques",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1ShGTtoxCzIggqf8P-pVJRdOlVpJ_okuA",
          },
          {
            id: "4",
            Subject: "Software  Engineering and Project Managament",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/15p8Xc_zhjlKFcx1nfBZsOn7qOkbdeeRb",
          },
          {
            id: "5",
            Subject: "Advance data structures",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1i0VIdJInykUtirqwEsy7SY4W3xoaCmmD",
          },
        ];
        //console.log(jsonData);
        setMaterial(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  //to search items

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = material.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(term)
      )
    );

    setFilteredData(filteredResults);
  };

  return (
    
    <div className='note-fusion'>
        <section className='notes-search-component'>
            <h2 className='notes-search-header'>
                NoteFusion - Search and Conquer
            </h2>
            <div className='search-bar-button'>
            <input type='text' id='note-search-bar' placeholder='Search Subject ....'  value={searchTerm}
          onChange={handleSearch}></input>
            <button className='add-notes'>Add Notes</button>
            </div>

        </section>

        <section className='note-serach-results'>
        
          
            {material ? (
              <ul className="notes-list">
                {filteredData.map((item) => (
                  <li key={item.id}>
                    <div class="notes-item">
                      <a
                        href={item.Link}
                        target="_blank"
                        rel="noreferrer"
                        class="ag-courses-item_link"
                      >

                        <div class="notes-title">{item.Subject}</div>

                        <div class="notes-description">
                          {item.description}
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading data...</p>
            )}
        
        </section>
    </div>
    
  )
}
