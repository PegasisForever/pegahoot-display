import React, {Component} from "react"
import ReactDOM from "react-dom"
import {JoinActivity} from "./JoinActivity"
import {CountDownActivity} from "./CountDownActivity"
import "./index.css"

const wsUrl = "ws://localhost:8080/display"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "activity": "JOIN",
            "users":[]
        }
        this.socket = new WebSocket(wsUrl)
        let self = this

        this.socket.onopen = function (event) {
            console.log("Socket connected")
            // socket.send("My name is John");
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

    startGame(){
        this.socket.send(JSON.stringify({
            "command":"start"
        }))
    }

    render() {
        if (this.state.activity==="JOIN"){
            return <JoinActivity
                users={this.state.users}
                startGame={this.startGame}/>
        }else if(this.state.activity==="COUNTDOWN"){
            return <CountDownActivity
                questionIndex={this.state.questionIndex}
                countDownSeconds={this.state.countDownSeconds}/>
        }
        return <div/>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
