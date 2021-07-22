import React from 'react'
import logo from '../images/logo.png'

const Logo = (props) => {
    return (
        <div className="text-center mt-5">
            <img classname="img-fluid" src={logo} alt="logo" width={props.width} height={props.height}></img>
        </div>
    )
}

export default Logo