import React from 'react';
import './headerDetails.css';
import { Status } from '../../main/invoiceList/invoiceElem/InvoiceElem';



interface IProps {
    status? : any
}
class HeaderDetails extends React.Component<IProps> {

    constructor(props: IProps){
        super(props)
    }
    render() {
        return (
            <div className="header-details-container">
                <div className="header-defatils-left">
                    <div>Status</div>
                    <Status status={this.props.status}/>
                </div>
                <div className="header-details-right">
                    <div className="btn btn-black">Edit</div>
                    <div className="btn btn-red">Delete</div>
                </div>
            </div>
           
        )
    }
}

export default HeaderDetails;