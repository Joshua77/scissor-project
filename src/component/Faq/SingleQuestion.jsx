import React, { useState } from "react";
//import {AiOutlineMinus} from "react-icons/ui";
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import plus from '../../assets/fb 4.png'
import minus from "../../assets/google.png"

const SingleQuestion = ({title, info})=>{
//core functionality is to either show or hide the info
//note that we set the button to return the opposite of the current state anytime we click on it
//so if it was open/true now, clicking it will make it return the opposite which is to close Info


// { showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }


    const [showInfo, setShowInfo] =useState(false);

    return(
        <article className="questions">
            <header>
                <h4>{title}</h4>
                <button onClick={()=> setShowInfo(!setShowInfo)}>
                   {setShowInfo ? <img src={plus} alt="toggle faq answer"/>: <img src={minus} alt="toggle faq answer"/> }
                </button>
            </header>
            { showInfo && <p> { info }</p>}
        </article>
    )
}

export default SingleQuestion;