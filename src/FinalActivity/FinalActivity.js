import React from "react"
import "./FinalActivity.css"
import logo from "../pegahoot_logo.png"

export function FinalActivity(props) {
    let userScores=props.userScores
    return <div className={"full-page final-activity"}>
        <img className={"final-logo"} src={logo}/>
        <div className={"top3-chart"}>
            {userScores[1]?<ChartColumn rank={2} name={userScores[1].name} score={userScores[1].score}/>:null}
            {userScores[0]?<ChartColumn rank={1} name={userScores[0].name} score={userScores[0].score}/>:null}
            {userScores[2]?<ChartColumn rank={3} name={userScores[2].name} score={userScores[2].score}/>:null}
        </div>
        <div className={"finalscore-list"}>
            {props.userScores.slice(3).map((userScore,index) => <UserScoreItem key={index} index={index+4} userScore={userScore}/>)}
        </div>
    </div>
}

function ChartColumn(props) {
    return <div className={"chart-column"} >
        <p className={"column-name"}>{props.name}</p>
        <p className={"column-score"}>{props.score}</p>
        <div className={"column-bar"} style={{height:(4-props.rank)*150+"px"}}>{props.rank}</div>
    </div>
}

function UserScoreItem(props) {
    let userScore = props.userScore
    return <div className={"finalscore-item"}>
        <span className={"float-left"}>{props.index}. {userScore.name}</span>
        <span className={"float-right"}>{userScore.score}</span>
    </div>
}