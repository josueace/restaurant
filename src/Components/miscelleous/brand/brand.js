import React from 'react';
import './brand.css';
import logo from '../../../Assests/icons/logo2.png';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
          
            <p className="name">Caribbean Island</p>
            <p className="name">Restaurant</p>
            <p className="lastTitle">Dominican Food</p>
        </div>

    );
}

export default brand;