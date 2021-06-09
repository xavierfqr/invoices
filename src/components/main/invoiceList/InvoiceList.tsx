import React from 'react';
import { FILTERS } from '../../../constants/Filters';
import InvoiceElem from './invoiceElem/InvoiceElem';
import {motion} from 'framer-motion';

interface Props {
    filters: FILTERS[]
}

interface State {
    invoiceList : any
}

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
}
const elemVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}


class InvoiceList extends React.Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            invoiceList: []
        }
    }

    async componentDidMount(){
        fetch('data.json')
            .then(res => res.json())
            .then(myJson => this.setState({invoiceList: myJson}))        
    }

    handleFilter = (elem: string) => {
        switch(elem){
            case "paid":
                return this.props.filters.indexOf(FILTERS.PAID) !== -1
            case "pending":
                return this.props.filters.indexOf(FILTERS.PENDING) !== -1
            case "draft":
                return this.props.filters.indexOf(FILTERS.DRAFT) !== -1
        }
    }

    

    filteredList = () => {
        const invoiceList = this.state.invoiceList.filter((elem: any) => this.handleFilter(elem.status));
        return (
            invoiceList.map((elem: any, index: number) => (
                <motion.div key={index} variants={elemVariants} initial="hidden" animate="visible">
                    <InvoiceElem id={elem.id} createdAt={elem.createdAt} clientName={elem.clientName}
                    total={elem.total} status={elem.status}/>
                </motion.div>
            ))
        )
    }

    render(){
        
        return (
            <>{this.state.invoiceList.length !== 0 &&
                <motion.div className="invoice-list-container" variants={listVariants} initial="hidden" animate="visible" exit="exit">
                    {this.filteredList()}
                </motion.div>}
            </>
        )
    }
}

export default InvoiceList;