import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpense';
import HelpExchangePage from '../components/HelpExchange';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';



const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path ="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path ="/create" component = {AddExpensePage}/>
    <Route path = "/edit/:id" component = {EditExpensePage}/>
    <Route path ="/help" component = {HelpExchangePage}/>
    <Route component = {NotFoundPage} />
    </Switch>
    </div>  
    </BrowserRouter>

);




export default AppRouter;