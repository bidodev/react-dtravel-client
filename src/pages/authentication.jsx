import React from 'react'

import './authentication.styles.scss'

//signIn Component
import SignIn from "../components/signin/login.component"

function Authentication() {
    return (
        <div className="authentication">
            <SignIn/>
        </div>
    )
}

export default Authentication
