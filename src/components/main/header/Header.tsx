import React, { useState } from 'react';
import './header.css';
import {ReactComponent as Plus} from '../../../images/icon-plus.svg';
import {ReactComponent as Arrow} from '../../../images/icon-arrow-down.svg';


const Filter = () => {
    return (    
        <div className="dropdown">
            <div><input type="checkbox"/> Paid</div>
            <div><input type="checkbox"/> Pending</div>
            <div><input type="checkbox"/> Draft</div>
        </div>
    )
}

const Header = () => {
    const [isOpened, setIsOpened] = useState(false)

    const handleClick = () => {
        setIsOpened(!isOpened)
    }

    return (
        <div className="header-container">
            <div className="left">
                <div className="title">Invoices</div>
                <div className="subtitle">There are 8 total invoices.</div>
            </div>
            <div className="right">
                <div className="filter-container">
                    <div className="filter" onClick={handleClick}>
                        <div className="filter-text">Filter by status</div>
                        <Arrow className={isOpened ? "rotate-up" : "rotate-down "}  />
                    </div>
                    { isOpened && <Filter/>
                    }
                </div>
                <div className="new-invoice">
                    <div className="plus-container">
                        <Plus className="plus"/>
                    </div>
                    <div className="invoice-text">New Invoice</div>
                </div>
            </div>
        </div>
    )
}

export default Header;