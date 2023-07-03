import React from 'react'
import "./Clubpage.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { useParams } from 'react-router-dom'
// import Sidenav from './Sidenav'
// import ClubInfo from './ClubInfo'



function Clubpage(props) {
  return (
    <div className='Clubpage'>
       <div className='fitem item1'><Sidebar user={props.user}/></div>
       {/* <div className='fitem item2'>{props.club}</div> */}

    </div>
  )
}

export default Clubpage