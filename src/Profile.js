import React from "react"

class Profile extends React.Component {
    render() {
        return (
            <main className="profile">
                <section>
                    <img 
                        id="profile-pic"
                        src={require("./images/profilepic.jpg")}
                        alt="profilepic"/>
                    <h1>John Michael Corbeta</h1>
                </section>
            </main>
        )
    }
}

export default Profile