import React, {Component} from "react"
import ReactDOM from "react-dom"
import {JoinActivity} from "./JoinActivity/JoinActivity"
import {CountDownActivity} from "./CountDownActivity/CountDownActivity"
import "./index.css"
import {GameActivity} from "./GameActivity/GameActivity"
import {AnswerActivity} from "./AnswerActivity/AnswerActivity"
import {FinalActivity} from "./FinalActivity/FinalActivity"

let wsUrl
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    wsUrl = "ws://localhost:5008/display"
} else {
    wsUrl = "wss://hoot.pegasis.site/ws/display"
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: "JOIN",
            userScores: []
        }
        this.socket = new WebSocket(wsUrl)
        let self = this

        this.socket.onopen = function (event) {
            console.log("Socket connected")
        }

        this.socket.onmessage = function (event) {
            console.log(`Socket received: ${event.data}`)
            self.setState(JSON.parse(event.data))
        }

        this.socket.onclose = function (event) {
            if (event.wasClean) {
                console.log(`Socket closed cleanly, code=${event.code} reason=${event.reason}`)
            } else {
                console.log('Socket died')
            }
        }

        this.socket.onerror = function (error) {
            alert(`Socket error: ${error.message}`)
        }

        this.startGame = this.startGame.bind(this)
    }

    startGame() {
        this.socket.send(JSON.stringify({
            command: "start"
        }))
    }

    render() {
        if (this.state.activity === "JOIN") {
            return <JoinActivity
                users={this.state.userScores.map((userScore) => userScore.name)}
                startGame={this.startGame}/>
        } else if (this.state.activity === "COUNTDOWN") {
            return <CountDownActivity
                questionIndex={this.state.questionIndex}
                countDownSeconds={this.state.countDownSeconds}/>
        } else if (this.state.activity === "GAME") {
            return <GameActivity
                questionIndex={this.state.questionIndex}
                questionLeftSeconds={this.state.questionLeftSeconds}
                questionText={this.state.questionText}
                questionSentence={this.state.questionSentence}
                answerTimes={this.state.answerTimes}
            />
        } else if (this.state.activity === "ANSWER") {
            return <AnswerActivity
                questionIndex={this.state.questionIndex}
                questionText={this.state.questionText}
                questionSentence={this.state.questionSentence}
                questionAnswer={this.state.questionAnswer}
                userScores={this.state.userScores}
            />
        } else if (this.state.activity === "FINAL") {
            return <FinalActivity
                userScores={this.state.userScores}
            />
        }
        return <div/>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
