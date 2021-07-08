// Menu Inicial de la App

import React from 'react'

const MenuInicial = () => {
    return (
    <div className="row mt-3">
        <div className="col"></div>
        <div className="col">
            <form className="form-group">
                <input 
                    className="form-control"
                    type="email" 
                    placeholder="Introduce el Usuario"
                />    
                <input 
                    className="form-control mt-4"
                    type="password" 
                    placeholder="Introduce la Contraseña"
                /> 
                <input 
                    className="btn btn-dark btn-block mt-4 container"
                    type="submit"
                    value="Registrar Usuario"
                />   
            </form>
            <button
                className="btn btn-success btn-block container mt-4"
            >
                Iniciar Sesion
            </button>
        </div>
        <div className="col"></div>
    </div>
    )
}

export default MenuInicial