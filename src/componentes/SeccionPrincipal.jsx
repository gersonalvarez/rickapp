import React from 'react'
import Tarjeta from './Tarjeta'
const Seccionprincpial = () => {
    return (
        <header>
            <main>
                <div>
                    <h1>
                        <center> The Rick And Morty API</center>
                    </h1>
                </div>
                <div className="tarjetero"></div>
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </main>
        </header>
    )

}

export default Seccionprincpial