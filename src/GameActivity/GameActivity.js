import React from "react"
import "./GameActivity.css"

export function GameActivity(props) {
    return <div className={"full-page game-activity"}>
        <p className={"question-number"}>Question #{props.questionIndex}</p>
        <p className={"question-left-seconds"}>{props.questionLeftSeconds}</p>
        <p className={"question-text"}>{props.questionText}</p>
        <p className={"question-sentence"}>{props.questionSentence}</p>
    </div>
}