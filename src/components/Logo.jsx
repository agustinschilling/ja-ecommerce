import React from 'react'
import logo from '../images/logo.png'

const Logo = () => {
    return (
        <div className="text-center mt-5">
            <img classname="img-fluid" src={logo} alt="logo" width="200" height="200"></img>
        </div>
    )
}

export default Logo