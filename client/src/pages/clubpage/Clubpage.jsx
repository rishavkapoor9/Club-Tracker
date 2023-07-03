import React from 'react'
import "./Clubpage.css"
import Sidebar from "../../components/sidebar/Sidebar";
import ClubInfo from '../../components/ClubInfo/ClubInfo';


function Clubpage() {
  return (
    <div className='Clubpage'>
       <div className='fitem item1'><Sidebar/></div>
       <div className='fitem item2'><ClubInfo/></div>
    </div>
  )
}

export default Clubpage