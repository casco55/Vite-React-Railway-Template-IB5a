import React from "react";
export const ProductCard = ({ product }) => {
    const { nombre, descripcion, precio, estado } = product;
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">{precio}</p>
                        <p className="card-text">{estado ? 'Activo' : 'Inactivo'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
