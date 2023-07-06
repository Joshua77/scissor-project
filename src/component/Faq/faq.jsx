import React, { useState } from "react";
import "./questions.css";
import SingleQuestion from "./SingleQuestion";
import data from './data'

const Faq =() => {

    const [questions, setQuestions] = useState(data);
    
        return(
            <div className="faq-container">
                <div className ="faq-container-content">
                    {questions.map((question)=>{
                        return(<SingleQuestion key={question.id} {...question}/>)
                    })}
                </div>
            </div>
        )
}

export default Faq;