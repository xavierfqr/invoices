import React from 'react';
import './header.css';
import {ReactComponent as Plus} from '../../../images/icon-plus.svg';
import {ReactComponent as Arrow} from '../../../images/icon-arrow-down.svg';
import {FILTERS} from '../../../constants/Filters'

interface FilterProps {
    setFilters: any
}

interface FilterState {
    myFilters : Array<FILTERS>
}

class Filter extends React.Component<FilterProps, FilterState> {

    constructor(props: FilterProps){
        super(props);
        this.state={
            myFilters: [FILTERS.PAID, FILTERS.PENDING, FILTERS.DRAFT]
        }
    }

    handleChange = (filter: FILTERS, isChecked: boolean) => {
        const filtersTemp: FILTERS[] = [...this.state.myFilters];
        if (isChecked) {
            filtersTemp.push(filter);
        }
        else {
            const index = this.state.myFilters.indexOf(filter);
            filtersTemp.splice(index, 1);
        }
        this.setState({
            myFilters: filtersTemp
        })
        this.props.setFilters(filtersTemp);
    }
    render(){
        return (    
            <div className="dropdown">
                <div><input type="checkbox" defaultChecked={true} onChange={(e) => this.handleChange(FILTERS.PAID, e.target.checked)}/> Paid</div>
                <div><input type="checkbox" defaultChecked={true} onChange={(e) => this.handleChange(FILTERS.PENDING, e.target.checked)}/> Pending</div>
                <div><input type="checkbox" defaultChecked={true} onChange={(e) => this.handleChange(FILTERS.DRAFT, e.target.checked)}/> Draft</div>
            </div>
        )
    }
}

interface HeaderProps {
    setFilters: any
}

interface HeaderState {
    isOpened: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps){
        super(props)
        this.state = {
            isOpened : false
        }
    }

    handleClick = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render(){
        return (
            <div className="header-container">
                <div className="left">
                    <div className="title">Invoices</div>
                    <div className="subtitle">There are 8 total invoices.</div>
                </div>
                <div className="right">
                    <div className="filter-container">
                        <div className="filter" onClick={this.handleClick}>
                            <div className="filter-text">Filter by status</div>
                            <Arrow className={this.state.isOpened ? "rotate-up" : "rotate-down "}  />
                        </div>
                        { this.state.isOpened && <Filter setFilters={this.props.setFilters}/>
                        }
                    </div>
                    <div className="new-invoice">
                        <div className="plus-container">
                            <Plus className="plus"/>
                        </div>
                        <div className="invoice-text">New Invoice</div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Header;