import React from "react"

function Header(props) {
    return (
        <header>
            <h1>Welcome to {"< Corbomode />"}</h1>
            <nav>
                <button name="profile" onClick={props.headerHandle}>Profile</button>
                <button name="projects" onClick={props.headerHandle}>Projects</button>
                <button name="reference" onClick={props.headerHandle}>Reference</button>
                <button name="About" onClick={props.headerHandle}>About</button>
            </nav>
        </header>
    )
}

export default Header