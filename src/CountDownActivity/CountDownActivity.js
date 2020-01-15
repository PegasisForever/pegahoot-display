import React from "react"
import "./CountDownActivity.css"

export function CountDownActivity(props){
    return <div className={"full-page"}>
        <div className={"center"}>
            <p className={"question-index"}>Question #{props.questionIndex}</p>
            <p className={"countdown-time"}>{props.countDownSeconds}</p>
        </div>
    </div>
}