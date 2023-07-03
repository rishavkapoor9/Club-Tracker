import React from 'react'
import './DescriptionBox.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function Groups() {
    return(
        <>
            <div className='description'>
                <div className='descriptionwrapper'>
                    <div className='groupphoto'>
                        <img className="groupimg" src="/assets/person/1.jpeg" alt="" />
                    </div>
                    <div className="clubname">
                        <span className='cname'>Enactus</span>
                    </div>
                    <div className="about">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil repellat similique et expedita, libero perferendis aspernatur at odit. Iure molestias iste deleniti doloremque rem. Ipsam reiciendis eum nostrum dignissimos.
                        </div>
                    </div>
                    <div className="contact1">
                        <div className='flexxx'>
                            <div className='fleyyy'>
                            <span className='link1'><LocationOnIcon/></span>
                            <span className='contact11'>206,1st floor,SAC</span>
                            <button><EditIcon/></button>
                            </div>
                        </div>
                        <div className="flexxx">
                            <div className='fleyyy'>
                            <span className='link1'><ContactsIcon/></span>
                            <span className='contact11'>+91 1234567890</span>
                            <button><EditIcon/></button>
                            </div>
                        </div>
                        <div className="flexxx">
                            <div className='fleyyy'>
                            <span className='link1'><EmailIcon/></span>
                            <span className='contact11'>enactus@iitr.ac.in</span>
                            <button><EditIcon/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="logo">
                <img className="ProfileImg" src="/assets/person/1.jpeg" alt="" />
            </div>  */}
        </>
    )
}