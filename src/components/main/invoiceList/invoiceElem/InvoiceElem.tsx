import React from 'react';
import './invoiceElem.css';
import {ReactComponent as RightArrow} from '../../../../images/icon-arrow-right.svg';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

interface Props {
    id: number,
    createdAt: string,
    clientName: string,
    total: number,
    status: string
}

interface StatusProps {
    status: string
}

const Status = ({status} : StatusProps) => {
    const classes = `${status} status`;
    const circleClasses = `${status}-circle circle`
    return (
        <div className={classes}>
            <div className={circleClasses}></div>
            <div className="status-text">{status}</div>
        </div>
    )
}

const InvoiceElem = ({id,  createdAt, clientName, total, status} : Props) => {
    const date = new Date(createdAt);
    const stringDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' }).substr(0, 3)} ${date.getFullYear()}`

    return (
        <Link to={`/invoice/${id}`} style={{ textDecoration: 'none', color:"#FFF"}}>
            <motion.div className="invoice-elem-container" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="id"><span>#</span>{id}</div>
                <div className="created-at">Due {stringDate}</div>
                <div className="client-name">{clientName}</div>
                <div className="total">{total}$</div>
                <Status status={status}/>
                <RightArrow/>
            </motion.div>
        </Link>
    )
}

export default InvoiceElem;