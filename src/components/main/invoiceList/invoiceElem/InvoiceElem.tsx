import React from 'react';
import './invoiceElem.css';
import {ReactComponent as RightArrow} from '../../../../images/icon-arrow-right.svg';

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
    const classes = `${status} status`
    return (
        <div className={classes}><div className="circle"></div>{status}</div>
    )
}

const InvoiceElem = ({id,  createdAt, clientName, total, status} : Props) => {
    return (
        <div className="invoice-elem-container">
            <div className="id"><span>#</span>{id}</div>
            <div className="created-at">{createdAt}</div>
            <div className="client-name">{clientName}</div>
            <div className="total">{total}</div>
            <Status status={status}/>
            <RightArrow/>
        </div>
    )
}

export default InvoiceElem;