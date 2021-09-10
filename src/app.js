import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,Connect} from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(VisibleExpenses)
    
});


store.dispatch(addExpense({description:'Water Bill',note:'water bill',amountPaid:57000,createdAt:700}))
store.dispatch(addExpense({description:'Rent Bill',note:'rent bill',amountPaid:500000,createdAt:650}))
store.dispatch(addExpense({description:'tv  Bill',note:'tv ',amountPaid:30000,createdAt:990}))
store.dispatch(addExpense({description:'Gas Bill',note:'',amountPaid:45000,createdAt:1000}))
store.dispatch(addExpense({description:'internet Bill',note:'',amountPaid:35000,createdAt:1010}))











const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>  
    
);

ReactDOM.render(jsx,document.getElementById('app'));