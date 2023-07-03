import React from 'react'
import "./ClubInfo.css"
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox'
import Events from '../../components/Events/Events'
import Resources from '../../components/Resources/Resources'
import PostProject from '../../components/PostProject/PostProject'

export default function Groups() {
    return(
        <>
        <div className="clubinfo">
                <div className='DescriptionBox'>
                        <DescriptionBox/>
                </div>
                <div className='cont'>
                        <div className="flexh flexh1">
                                <Events/>
                                <Resources/>
                        </div>
                        <div className="flexh flexh2 PostProject">
                                <PostProject/>
                        </div>
                        
                </div>
        </div>
        </>
    )
}