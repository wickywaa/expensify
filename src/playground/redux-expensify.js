import {createStore,combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid'
console.log('hey hey')

// addexpense


export const addExpense =(
    {
        description='no description',
        note='no note',
        amountPaid=0,
        createdAt=0
    }={})=>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuidv4(),
        description,
        note,
        amountPaid,
        createdAt
    }

    });
// remove expense

export const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id

})
// edit expense

const editExpense = (id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update

})
// set text filter

const setTextFilter = (text='')=>({
    type:'SET_TEXT',
    text
})
// sort by date

const sortByDate = () =>({
    type:'SORT_BY_DATE',
    
})



//sort by amount
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
    
})

// set start date

const setStartDate =(startDate)=>({
    type:'SET_START_DATE',
    startDate

})


// set end date

const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})


// expenses reducer
const expenseReducerDefaultState = [];

const  expensesReducer = (state = expenseReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
           return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }

};

const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return{
              ...state,
              sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }


}

//timestamps milisceonds = 1st january 1970 (unix || epoch )
// 33400, 10 , -283

// get visible expenses

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =   expense.description.toLowerCase().includes(text.toLowerCase())
        

    return startDateMatch && endDateMatch && textMatch

    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1:-1
        }else if(sortBy ==='amount'){
            return a.amountPaid < b.amountPaid? 1:-1
        }
    })

};

// store creation


const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer

    })
    
);

store.subscribe(()=>{
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(VisibleExpenses)
    
});


const expense1 = store.dispatch(addExpense({description:'Rent',note:'hello',amountPaid:100,createdAt:-1000}));
const expense2 = store.dispatch(addExpense({description:'shopping',note:'hello',amountPaid:10000,createdAt:1000}));
// store.dispatch(removeExpense({id:expense2.expense.id}));



// store.dispatch(editExpense(expense1.expense.id,{amountPaid:500}))

 //store.dispatch(setTextFilter('n'))
// store.dispatch(setTextFilter('boobies'))

// console.log('from here')
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// console.log('look here')
//  store.dispatch(setStartDate(-2000))
// // store.dispatch(setStartDate())

//  store.dispatch(setEndDate(900))
// // store.dispatch(setEndDate())





const demoState= {
    expenses:[{
        id:'randomstring',
        description:'January rent',
        note:'final payment',
        amountPaid:'54500',
        createdAt:0,
        
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}


