import React, { useState } from "react";
import "./faq.css";
import SingleQuestion from "./SingleQuestion";
import question from './question'

const Faq =() => {

    const [questions, setQuestions] = useState(question);
    
        return(
            <div className="faq-container">
                <div>
                    {questions.map((question)=>{
                        return(<SingleQuestion key={question.id} {...question}/>)
                    })}
                </div>
            </div>
        )
}

export default Faq;