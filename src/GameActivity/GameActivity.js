import React from "react"
import "./GameActivity.css"

export function GameActivity(props) {
    return <div className={"full-page game-activity"}>
        <p className={"question-number"}>Question #{props.questionIndex}</p>
        <p className={"question-left-seconds"}>{props.questionLeftSeconds}</p>
        <p className={"question-text"}>{props.questionText}</p>
        <p className={"question-sentence"}>{props.questionSentence}</p>
        <div className={"answertime-list"}>
            {props.answerTimes.map(answerTime => <AnswerTimeItem key={answerTime} answerTime={answerTime}/>)}
        </div>
    </div>
}

function AnswerTimeItem(props) {
    let answerTime = props.answerTime
    return <div className={"answertime-item"}>
        <span className={"float-left"}>{answerTime.name}</span>
        <span className={"float-right correct-mark"}>{answerTime.isCorrect ? "✔" : "✖"}</span>
        <span className={"float-right"}>{Math.floor(answerTime.time * 100) / 100}s</span>
    </div>
}