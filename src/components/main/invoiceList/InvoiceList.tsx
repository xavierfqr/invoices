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


class InvoiceList extends React.Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            invoiceList : []
        }
    }

    async componentDidMount(){
        fetch('data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
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

    animation = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .15
            }
        }
    }

    filteredList = () => {
        const invoiceList = this.state.invoiceList.filter((elem: any) => this.handleFilter(elem.status));
        return (
            invoiceList.map((elem: any, index: number) => (
                <InvoiceElem key={index} id={elem.id} createdAt={elem.createdAt} clientName={elem.clientName}
                    total={elem.total} status={elem.status}/>
            ))
        )
    }

    render(){
        return (
            <>{this.state.invoiceList !== [] &&
                <motion.div className="invoice-list-container" variants={this.animation} initial="hidden" animate="visible">
                    {this.filteredList()}
                </motion.div>}
            </>
        )
    }
}

export default InvoiceList;