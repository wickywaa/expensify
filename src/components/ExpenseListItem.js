import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';




 const ExpenseListItem = ({dispatch,id,description,note,amountPaid,createdAt})=>{
     const url = `/edit/${id}`
    return(
        <div>
        <p> <NavLink to = {url}  activeClassName="is-active">{description}</NavLink></p>]
            <p>{description}</p>
            <p>amount paid:{amountPaid}- - - Created At {createdAt}</p>
            <p>notes:{note}</p>
            
            
        </div>
    )

}



export default ExpenseListItem;