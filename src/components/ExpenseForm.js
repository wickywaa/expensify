
import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';




const now = moment()
console.log(now.format('MMMM Do YYYY'))

class ExpenseForm extends React.Component{

constructor(props){
    super(props);
   this.state = {
        description:  props.expense?props.expense.description:'',
        note:         props.expense?props.expense.note:'',
        amountPaid:   props.expense?(props.expense.amountPaid/100).toString():'',
        createdAt:    props.expense?moment(props.expense.createdAt):moment(),
        focused:false,
        error:''

    }

}
    
    onDescriptionChange =(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))

    }
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }
    onAmountChange =(e) =>{
        const amountPaid = e.target.value;
        if(!amountPaid || amountPaid.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amountPaid}))
        }
    }
    onDateChange=(createdAt)=>{
    if(createdAt){
        this.setState(()=>({createdAt}))
    }
        
        
    }
    onFocusChange=({focused})=>{
        
            this.setState(()=>({focused}))
        
        
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amountPaid){
            const error = ' please enter a description and amount paid'
            this.setState(()=>({error}))
        }
        else{
            const error =''
            this.setState(()=>({error}))
            this.props.onSubmit({
                description:this.state.description,
                amountPaid:parseFloat(this.state.amountPaid,10) *100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf(),
                

            })
        }

    };
    
    render(){
        return(
            <div>
            {this.state.error&& <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                placeholder ="Description"
                autoFocus
                value = {this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input
                type = "text"
                placeholder ="Amount Paid"
                value = {this.state.amountPaid}
                onChange ={this.onAmountChange}
                />
                <textarea 
                placeholder ="add a note for your expense (optional)"
                value = {this.state.note}
                onChange ={this.onNoteChange}
                >
                </textarea>
                <SingleDatePicker
                date ={this.state.createdAt}
                onDateChange = {this.onDateChange}
                focused = {this.state.focused}
                onFocusChange = {this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange = {()=>false}
                />
                <button>Add Expense</button>
                </form>
            </div>
        )
    }
}


export default ExpenseForm;