import React, { useState } from "react";
//import {AiOutlineMinus} from "react-icons/ui";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";


const SingleQuestion = ({title, info})=>{
//core functionality is to either show or hide the info
//note that we set the button to return the opposite of the current state anytime we click on it
//so if it was open/true now, clicking it will make it return the opposite which is to close Info


// { showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }


    const [showInfo, setShowInfo] =useState(false);
    

    return(
        <article className="questions">
            <header className="questions-header">
                <div className="title-faq"><h4>{title}</h4></div>
                <div className="icon-faq">
                    <button onClick={()=> setShowInfo(!showInfo)}> { showInfo ? <AiOutlineMinus style={{borderRadius: "50px"}}/> : <AiOutlinePlus/> }
                    </button>
                </div>
                
            </header>
            <div className="faq-response-box">
                { showInfo && <p className="faq-response"> { info }</p>}
            </div>
            
        </article>
    )
}

export default SingleQuestion;