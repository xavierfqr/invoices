import React from 'react';
import {motion} from 'framer-motion';
import './invoiceDetails.css';
import '../main/invoiceList/invoiceElem/invoiceElem.css';
import BodyDetails from './detailsSections/BodyDetails';
import HeaderDetails from './detailsSections/HeaderDetails';

const invoiceVariants = {
    hidden:{
        opacity: 0,
        x: '50vw'
    },
    visible:{
        opacity: 1,
        x:0,
        transition: {
            type:'tween',
            duration: 1,
        }
    },
    exit: {
        x:'50vw',
        transition:{
            duration: 0.5,
            ease:'easeIn'
        },
        opacity: 0,
    }
}

interface IProps {
    status?: any
}

class InvoiceDetails extends React.Component<IProps> {

    render(){
        return (
            <motion.div className="invoice-details-container" variants={invoiceVariants} initial="hidden" animate="visible" exit="exit">
                <HeaderDetails status={this.props.status}/>
                <BodyDetails/>
            </motion.div>
          );
    }
  
}

export default InvoiceDetails;
