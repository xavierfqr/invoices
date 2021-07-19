import React from 'react';
import Header from './header/Header';
import InvoiceList from './invoiceList/InvoiceList';
import './main.css';
import {FILTERS} from '../../constants/Filters'
import {motion} from 'framer-motion';


interface IProps {
}

interface IState {
    filters: FILTERS[],
}

const mainVariants = {
    hidden:{
    },
    visible:{
        opacity: 1
    },
    exit: {
        x:'-50vh',
        transition:{
            duration: 0.5,
            ease:'easeIn'
        },
        opacity: 0,
    }
}

class Main extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            filters : [FILTERS.PAID, FILTERS.PENDING, FILTERS.DRAFT],
        }
    }


    setFilters = (filters: FILTERS[]): any => {
        this.setState({
            filters: filters
        })
        console.log(filters)
    }

    render(){
        return (
            <motion.div variants={mainVariants} exit="exit" className="main-container">
                <Header setFilters={this.setFilters}/>
                <InvoiceList filters={this.state.filters}/>
            </motion.div>
        )
    }
}

export default Main;