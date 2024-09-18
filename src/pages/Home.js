import React from 'react'
import Event from '../components/Event'
import Announcement from '../components/Announcement'
import CalendarEvents from '../components/Calendar'

export default function Home() {
  return (
    <div className='HomePage'>
      <Event/>
      <section className='home-page-section-2'>
        <div className='announcements-section'>
          <h3 className='announcement-header'> Announcements </h3>
          
          <Announcement/>
          
        </div>
        <CalendarEvents/>
      </section>
      

      
    </div>
  )
}
