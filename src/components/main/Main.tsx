import React from 'react';
import Header from './header/Header';
import InvoiceList from './invoiceList/InvoiceList';
import './main.css';
import {FILTERS} from '../../constants/Filters'


interface Props {
}

interface State {
    filters: FILTERS[]
}

class Main extends React.Component<Props, State> {

    constructor(props: any){
        super(props)
        this.state = {
            filters : [FILTERS.PAID, FILTERS.PENDING, FILTERS.DRAFT]
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
            <div className="main-container">
                <Header setFilters={this.setFilters}/>
                <InvoiceList filters={this.state.filters}/>
            </div>
        )
    }
}

export default Main;