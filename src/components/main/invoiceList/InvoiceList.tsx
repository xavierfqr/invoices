import React from 'react';
import InvoiceElem from './invoiceElem/InvoiceElem';

interface Props {
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

    render(){
        return (
            <div className="invoice-list-container">
                {this.state.invoiceList.map((elem: any, index: number) => (
                    <InvoiceElem key={index} id={elem.id} createdAt={elem.createdAt} clientName={elem.clientName}
                        total={elem.total} status={elem.status}/>
                ))}
                <div>ewfjwefoj</div>
                <div>weifjwoef</div>
            </div>
        )
    }
}

export default InvoiceList;