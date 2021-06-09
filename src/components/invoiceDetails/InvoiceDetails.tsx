import React from 'react';
import {motion} from 'framer-motion';
import './invoiceDetails.css';

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
    }
}

class InvoiceDetails extends React.Component {
    render(){
        return (
            <motion.div className="invoice-details-container" variants={invoiceVariants} initial="hidden" animate="visible">
                Invoice Details weeesh
                efwiojf;wjfwef
                wpfohwo;fjwifjwf
                wpifgjwilfjw;iorgjfwrigerigerigljaerilgjaeilrgjaeigrjaerlig
            </motion.div>
          );
    }
  
}

export default InvoiceDetails;
