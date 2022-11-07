import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFoodPlaceForm } from "../hooks/useFoodPlaceForm";
import { TextInput } from "../../../components/formComponents/TextInput";
import { TimeInput } from "../../../components/formComponents/TimeInput";

export const FoodPlaceForm = ({ id, close, foodPlaceList, handleImageVisor }) => {
    const {
        rut,
        nombre,
        direccion,
        imagen,
        telefono,
        correo,
        hora_apertura,
        hora_cierre,
        handleInputChange,
        handleFileChange,
        handleSubmit,
        typeForm
    } = useFoodPlaceForm(id, foodPlaceList);
    return (
        <>
            <div className="position-absolute top-0 bg-light full-height">
                <div className="d-flex flex-row justify-content-end">
                    <AiOutlineCloseCircle className="cursor-pointer" size={48} onClick={() => close()} />
                </div>
                <div className="d-flex flex-row py-3">
                    <h2 className="mx-auto">
                        {typeForm === "create" && "Crear Local"}
                        {typeForm === "update" && "Editar Local"}
                    </h2>
                </div>
                {/* div formulario */}
                <div className="row col-11 mx-auto">
                    <TextInput
                        label="Rut"
                        name="rut"
                        value={rut}
                        onChange={handleInputChange}
                        placeholder="Ingrese el rut del local"
                    />
                    <TextInput
                        name="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Ingrese Nombre"
                    />
                    <TextInput
                        name="direccion"
                        label="Dirección"
                        value={direccion}
                        onChange={handleInputChange}
                        placeholder="Ingrese Dirección"
                    />
                    <TextInput
                        name="telefono"
                        label="Teléfono"
                        value={telefono}
                        onChange={handleInputChange}
                        placeholder="Ingrese Teléfono"
                    />
                    <TextInput
                        name="correo"
                        label="Email"
                        value={correo}
                        onChange={handleInputChange}
                        placeholder="Ingrese Email"
                    />
                    <TimeInput
                        name="hora_apertura"
                        label="Hora Apertura"
                        value={hora_apertura}
                        onChange={handleInputChange}
                        placeholder="Ingrese Hora Apertura"
                    />
                    <TimeInput
                        name="hora_cierre"
                        label="Hora Cierre"
                        value={hora_cierre}
                        onChange={handleInputChange}
                        placeholder="Ingrese Hora Cierre"
                    />
                </div>
                <div className="d-flex flex-row justify-content-between col-6 mx-auto align-items-center">
                    <div className="col-10">
                        <div className="input-group my-2 d-flex flex-column mx-auto">
                            <label htmlFor="FoodPlaceImage" className="form-label">Imagen del Local</label>
                            <input type="file" accept="image/*" className="form-control w-100" id="FoodPlaceImage" name="FoodPlaceImage" onChange={handleFileChange} />
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
