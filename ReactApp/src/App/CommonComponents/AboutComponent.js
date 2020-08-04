import React from 'react';  

export function About (props){  
    let param = props.match.params["id"]; //reading the param in path /about/:id
    //console.log(param);
    return (
        <div className="about" >  
            <h2>We promise to support .... </h2>  
            <p className="about-content">If you’re looking for a job—a great job—we can help  
                you get in the door at some incredible companies.  
                Need to hire good people? We know thousands.  
                Let us introduce you. No matter where you are,  
                we can help you get where you want to go in your career.  
            </p>  
            <p>id = {param}</p>
        </div>  
    )  
}