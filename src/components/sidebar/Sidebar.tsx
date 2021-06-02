import React from 'react';
import './sidebar.css';
import {ReactComponent as Flocon} from '../../images/flocon-de-neige.svg';
import {ReactComponent as Sun} from '../../images/icon-sun.svg';
import avatar from '../../images/image-avatar.jpeg';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="flocon-container">
                <Flocon className="flocon"/>
            </div>
            <div className="bottom-items">
                <Sun className="sun"/>
                <div className="delimit-bar"></div>
                <img className="avatar" src={avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Sidebar;