import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate} from '../actions/filters';

const ExpenseListFilters=(props)=>(
    <div>
        <input type = "text" value ={props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value = {props.filters.sortBy} onChange={(e)=>{
            const sort= e.target.value
            sort === "date"?props.dispatch(sortByDate()):props.dispatch(sortByAmount())
        }}>
        <option value = "date">Date</option>
        <option value = "amount">Amount</option>
        </select>
    </div>

)

const mapStateToProps =(state)=>{
    return{
        filters:state.filters
    };

};

export default connect(mapStateToProps)(ExpenseListFilters);