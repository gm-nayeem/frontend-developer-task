import { useState } from 'react';
import './card.css';
import Modal from '../../components/modal/Modal';

import Profile_1 from '../../assets/pic-1.jpg';
import Profile_4 from '../../assets/pic-4.jpg';
import { FaRegComments } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";


const Card = ({ cardInfo }) => {
    const [open, setOpen] = useState(false);
    const [fileNum, setFileNum] = useState(cardInfo?.totalFileNumber || 0);

    return (
        <div className="card">
            <div className="images">
                <div className="profile">
                    <img src={Profile_4} className="image" alt="profile" />
                    <span className="name">Client Name</span>
                </div>
                <div className="profile">
                    <img src={Profile_1} alt="profile" className='image' />
                    <span className="name">Sadik Istiak</span>
                </div>
            </div>

            <div className="description">
                <p className="truncate-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                    mollitia.
                </p>
                <div className="box">
                    <MdAccountBalance className='icon' />
                    <p>1/2</p>
                </div>
            </div>

            <div className="social-info">
                <img src={Profile_4} className="image" alt="profile" />
                <img src={Profile_1} className="image" alt="profile" />
                <p className="circle">12+</p>

                <div className="item">
                    <FaRegComments className='icon' />
                    <p>15</p>
                </div>
                <div className="item">
                    <FaLink
                        className='icon'
                        onClick={() => setOpen(!open)}
                    />
                    <p className="countFile">{fileNum}</p>
                </div>
                <div className="item">
                    <BsCalendarDateFill className='icon' />
                    <p>07-12-2023</p>
                </div>

            </div>

            {
                open && (
                    <Modal
                        setFileNum={setFileNum}
                        setOpen={setOpen}
                    />
                )
            }
        </div>
    )
}

export default Card;