import React from 'react';
import {motion} from 'framer-motion';
import './invoiceDetails.css';

const invoiceVariants = {
    hidden:{
        x: '100vw'
    },
    visible:{
        x:0,
        transition: {
            type:'tween',
            duration: 1.5,
            delay:0.4,
        }
    }
}

class InvoiceDetails extends React.Component {
    render(){
        return (
            <motion.div variants={invoiceVariants} initial="hidden" animate="visible">
                Invoice Details weeesh
                efwiojf;wjfwef
                wpfohwo;fjwifjwf
                wpifgjwilfjw;iorgjfwrigerigerigljaerilgjaeilrgjaeigrjaerlig
            </motion.div>
          );
    }
  
}

export default InvoiceDetails;
