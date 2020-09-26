import React from "react"

import Header from "./Header"
import Profile from "./Profile"

class App extends React.Component {
    state = { render: "profile" }

    headerHandle = (event) => {
        this.setState({render: event.target.name})
    }

    render() {
        console.log(this.state.render)
        return (
            <div>
                <Header key="header" headerHandle={this.headerHandle} />
                <Profile />
            </div>
        )
    }
}

export default App