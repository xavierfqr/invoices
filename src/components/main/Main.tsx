import React from 'react';
import Header from './header/Header';
import InvoiceList from './invoiceList/InvoiceList';
import './main.css';

class Main extends React.Component {

    render(){
        return (
            <div className="main-container">
                <Header/>
                <InvoiceList/>
            </div>
        )
    }
}

export default Main;