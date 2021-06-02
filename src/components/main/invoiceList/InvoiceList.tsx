import React from 'react';
import jsonFile from './../../../data/data.json';


interface Props {
}

interface State {
    invoiceList : any
}


class InvoiceList extends React.Component<Props, State> {

    constructor(props: any){
        super(props)
        this.state = {
            invoiceList : []
        }
    }

    async componentDidMount(){
        fetch('./../../../data/data.json')
            .then(res => res.json())
        //const fetchInvoiceList = await response.text();
        
    }

    render(){
        return (
            <div>
                {this.state.invoiceList.map((elem: any, index: number) => (<div key={index}>{elem.id} toto</div>))}
            </div>
        )
    }
}

export default InvoiceList;