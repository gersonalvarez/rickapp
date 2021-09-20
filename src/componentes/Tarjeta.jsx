import React from 'react'

const Tarjeta = () => {
    return (
        <div className="Tarjeta">

            <div>

                <div className="imagentarjeta">
                    <img src="" alt="" />
                </div>

            </div>

            <div className="descripcion">
                <h4>
                    <a href="">Nombrepersonaje</a>
                </h4>
                <p className="estado">Estado - Tipo de criatura</p>

                <div className="locacionT">
                    <h5>Ultima ubicacion</h5>
                    <p>localizacion</p>
                </div>

                <div className="locacionT">
                    <h5>Primera locacion</h5>
                    <p>Localizacion</p>
                </div>

            </div>
        </div>
    )
}

export default Tarjeta