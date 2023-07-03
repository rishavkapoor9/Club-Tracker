import React from "react";
import './Events.css'


export default function Groups() {
    return (
        <div className="eve">
            <div className="evewrapper">
                <div className="groupTop">
                    <div className="heading">
                        Upcoming Events
                    </div>
                    <div className="edit">
                        Manage
                    </div>
                </div>
                <div className="info">
                    <ul className="list">
                        <li className="listings">
                            <div className="texts">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div className="loc">
                                <span>04 July 2023</span>
                                <span>05:00 pm</span>
                                <span>Old LHC 001</span>
                            </div>
                        </li>
                        <hr></hr>
                        <li>
                            <div className="texts">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?</div>
                            <div className="loc">
                                <span>04 July 2023</span>
                                <span>05:00 pm</span>
                                <span>Old LHC 001</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}