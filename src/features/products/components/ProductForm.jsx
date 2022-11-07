import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TextInput } from "../../../components/formComponents/TextInput";
import { useProductForm } from "../hooks/useProductForm";

export const ProductForm = ({ id, id_restaurante, close, productsList, handleImageVisor }) => {
    const {
        nombre,
        descripcion,
        precio,
        imagen,
        handleInputChange,
        handleFileChange,
        handleSubmit,
        typeForm
    } = useProductForm(id, id_restaurante, productsList);
    return (
        <>
            <div className="position-absolute top-0 bg-light full-height">
                <div className="d-flex flex-row justify-content-end">
                    <AiOutlineCloseCircle className="cursor-pointer" size={48} onClick={() => close()} />
                </div>
                <div className="d-flex flex-row py-3">
                    <h2 className="mx-auto">
                        {typeForm === "create" && "Crear Producto"}
                        {typeForm === "update" && "Editar Producto"}
                    </h2>
                </div>
                <div className="row col-11 mx-auto">
                    <TextInput
                        name="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Ingrese Nombre"
                    />
                    <TextInput
                        name="descripcion"
                        label="Descripción"
                        value={descripcion}
                        onChange={handleInputChange}
                        placeholder="Ingrese Descripción"
                    />
                    <TextInput
                        name="precio"
                        label="Precio"
                        value={precio}
                        onChange={handleInputChange}
                        placeholder="Ingrese Precio"
                    />
                </div>
                <div className="d-flex flex-row justify-content-between col-6 mx-auto align-items-center">
                    <div className="col-10">
                        <div className="input-group my-2 d-flex flex-column mx-auto">
                            <label htmlFor="productImage" className="form-label">Imagen del Producto</label>
                            <input type="file" accept="image/*" className="form-control w-100" id="productImage" name="productImage" onChange={handleFileChange} />
                        </div>
                    </div>
                    {imagen &&
                        <img
                            src={`https://mymolback-production.up.railway.app/imgs/${imagen}`}
                            alt="Imagen Local"
                            className="img-fluid cursor-pointer my-auto"
                            style={{ width: "50px" }}
                            onClick={() => handleImageVisor(imagen)}
                        />
                    }
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                        {typeForm === "create" && "Crear"}
                        {typeForm === "update" && "Editar"}
                    </button>
                    <button className="btn btn-secondary mx-2" onClick={() => close()}>Cancelar</button>
                </div>
            </div>
        </>
    )
}


