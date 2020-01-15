import React from "react"
import "./JoinActivity.css"
import logo from "../pegahoot_logo.png"

export function JoinActivity(props) {
    return <div className={"full-page"}>
        <img className={"logo"} src={logo} alt="Logo"/>
        <p className={"join-text"}>Join at <u>hoot.pegasis.site</u></p>
        <div className={"username-container"}>
            {props.users.map((user) => <UserCard user={user} key={user}/>)}
        </div>
        {props.users.length>0?<button className={"start-btn"} onClick={props.startGame}>Start</button>:null}
    </div>
}

function UserCard(props) {
    let user = props.user
    return <div className={"user-card"}>
        {user}
    </div>
}