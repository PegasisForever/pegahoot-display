import React, {Fragment} from "react"
import "./AnswerActivity.css"

export function AnswerActivity(props) {
    let questionSentences = props.questionSentence.split("__")
    return <div className={"full-page answer-activity"}>
        <p className={"question-number"}>Question #{props.questionIndex}</p>
        <p className={"question-text"}>{props.questionText}</p>
        <p className={"question-answer"}>
            <Fragment>
                {questionSentences[0]}
                <u className={"bold"}>{props.questionAnswer}</u>
                {questionSentences[1]}
            </Fragment>
        </p>
        <div className={"userscore-list"}>
            {props.userScores.map((userScore,index) => <UserScoreItem key={userScore} index={index+1} userScore={userScore}/>)}
        </div>
    </div>
}

function UserScoreItem(props) {
    let userScore = props.userScore
    return <div className={"userscore-item"}>
        <span className={"float-left"}>{props.index}. {userScore.name}</span>
        <span className={"float-right"}>{userScore.score}</span>
    </div>
}