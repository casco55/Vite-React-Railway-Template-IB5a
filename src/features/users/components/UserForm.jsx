import React from "react";
import { useUserForm } from "../hooks/useUserForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TextInput } from "../../../components/formComponents/TextInput";
import { SelectInput } from "../../../components/formComponents/SelectInput";

export const UserForm = ({id, close, usersList}) => {
    const {
        typeForm,
        rut,
        nombre,
        apellido,
        correo,
        telefono,
        id_rol,
        roles,
        handleInputChange,
        handleSelectChange,
        handleSubmit
    } = useUserForm(id, usersList);
    return (
        <>
            <div className="position-absolute top-0 bg-light full-height">
                <div className="d-flex flex-row justify-content-end">
                    <AiOutlineCloseCircle className="cursor-pointer" size={48} onClick={() => close()} />
                </div>
                <div className="d-flex flex-row py-3">
                    <h2 className="mx-auto">
                        {typeForm === "create" && "Crear Usuario"}
                        {typeForm === "update" && "Editar Usuario"}
                    </h2>
                </div>
                {/* div formulario */}
                <div className="row col-11 mx-auto">
                    <TextInput
                        name="rut"
                        label="Rut"
                        value={rut}
                        onChange={handleInputChange}
                        placeholder="Ingrese Rut"
                    />
                    <TextInput
                        name="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Ingrese Nombre"
                    />
                    <TextInput
                        name="apellido"
                        label="Apellido"
                        value={apellido}
                        onChange={handleInputChange}
                        placeholder="Ingrese Apellido"
                    />
                    <TextInput
                        name="correo"
                        label="Email"
                        value={correo}
                        onChange={handleInputChange}
                        placeholder="Ingrese Email"
                    />
                    <TextInput
                        name="telefono"
                        label="Teléfono"
                        value={telefono}
                        onChange={handleInputChange}
                        placeholder="Ingrese Teléfono"
                    />
                    <SelectInput
                        name="id_rol"
                        label="Rol"
                        value={id_rol}
                        onChange={handleSelectChange}
                        options={roles}
                    />                  

                </div>
                {/* div botones */}
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                        {typeForm === "create" && "Guardar"}
                        {typeForm === "update" && "Actualizar"}
                    </button>
                    <button className="btn btn-secondary mx-2" onClick={() => close()}>Cancelar</button>
                </div>
            </div>
        </>
    )
}