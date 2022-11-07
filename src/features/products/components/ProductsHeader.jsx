import React from "react";
export const ProductsHeader = (
    { restaurant }
) => {
    const { nombre, telefono, correo } = restaurant;
    return (
        <>
            <div className="row g-0 px-3 py-1">
                <div className="col-12 col-md-4">
                    <p>
                        <strong>Nombre: </strong>
                        {nombre}
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <p>
                        <strong>Teléfono: </strong>
                        {telefono}
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <p>
                        <strong>Correo: </strong>
                        {correo}
                    </p>
                </div>
            </div>
        </>
    )
}

