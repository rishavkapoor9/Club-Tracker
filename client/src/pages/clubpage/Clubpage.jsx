import React from 'react'
import "./Clubpage.css"
import Sidenav from './Sidenav'
import ClubInfo from './ClubInfo'


function Clubpage() {
  return (
    <div className='Clubpage'>
       <div className='fitem item1'><Sidenav/></div>
       <div className='fitem item2'><ClubInfo/></div>
    </div>
  )
}

export default Clubpage