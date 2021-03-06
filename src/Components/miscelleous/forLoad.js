import React from 'react';
import Spinner from './spinner/spinner';

const forLoad=()=>{
    return(
        <div style={{height:"50vh",width:"100vw",color:"#000",fontWeight:"bold",margin:"0 auto",padding:"0 auto"}}>
            <h1>Caribbean Island Restaurant</h1>
            <h3>Loading a Delicious Dominican Menu</h3>
            <Spinner/>
        </div>
    );
}

export default forLoad;