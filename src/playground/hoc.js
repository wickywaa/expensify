import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
    <h1>info</h1>
    <p>here is some info</p>
    <p>{props.info}</p>
    </div>
)


const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAdmin && <p> this is private info please don't share</p>}
        <WrappedComponent{...props}/>
        </div>
    );

};


const requireAuthenitcation=(WrappedComponent)=>{
    
        return (props)=>(
        <div>
        {props.isAuthenticated? <WrappedComponent {...props}/>: <p>please login to see info</p>}
            
        </div>
        )
    
    

    
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthenitcation(Info)

//ReactDOM.render(<AdminInfo isAdmin = {true} info =" 16/06/1987" />,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated = {true } info = "secret info" />,document.getElementById('app'))
