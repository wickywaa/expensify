import {createStore} from 'redux';


const incrementCount = ({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy 
});

const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy

});


const setCount = ({count=store.getState().count}={})=>({
    type:'SET',
    count
});

const reset =({count=0}={})=>({
    type:'RESET',
    count
})



const store = createStore((state= {count:0},action)=>{
   switch(action.type){
        case 'INCREMENT':
           return{
            count:state.count + action.incrementBy
           };
        case 'DECREMENT':
            return{
                count:state.count - action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            }
        case 'RESET':
            return{
                count: action.count
            };
        default:
            return state;
   }
  

});


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});





//Action -- an obcject that gets sent to the store


// I'd like to increment the count 


store.dispatch(incrementCount({incrementBy:7}));

store.dispatch(incrementCount());

store.dispatch(reset({count:57}))

store.dispatch(decrementCount({decrementBy:2}))

 store.dispatch(decrementCount())


store.dispatch(setCount({count:5}))
 

// I'd like to reset the count to zero






