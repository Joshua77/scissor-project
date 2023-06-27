import React, { useState } from "react";
import questions from "./questions";
import "./faq.css";
import SingleQuestion from "./SingleQuestion";

function Faq (){

    const [questions, setQuestions] = useState(data);
    
        return(
            <div className="faq-container">
                <div>
                    {questions.map((question)=>{
                        return<SingleQuestion key={question.id} {...question}/>
                    })}
                </div>
            </div>
        )
}