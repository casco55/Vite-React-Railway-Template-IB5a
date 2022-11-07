import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiUserAddOutline, TiUserDeleteOutline } from "react-icons/ti";

export const UserRow = ({
    user,
    showForm,
    showChangeStateModal,
}) => {
    const {
        id,
        rut,
        nombre,
        apellido,
        correo,
        telefono,
        estado,
        id_rol
    } = user;

    return (
        <>
            <tr>
                <td>{rut}</td>
                <td>{`${nombre} ${apellido}`}</td>
                <td>{correo}</td>
                <td>{telefono}</td>
                <td>
                    {estado ? "activo" : "inactivo"}
                </td>
                <td>{id_rol}</td>
                <td className="d-flex flex-row text-light">
                    <div className="p-1 bg-warning cursor-pointer mx-1 rounded">
                        <MdOutlineModeEditOutline
                            size={24}
                            onClick={() => showForm(id)}
                        />
                    </div>
                    <div className={`p-1 ${estado ? "bg-danger" : "bg-success"} cursor-pointer text-secundary mx1 rounded`}>
                        {
                            estado ?
                                <TiUserDeleteOutline
                                    size={24}
                                    onClick={() => showChangeStateModal(id, `${nombre} ${apellido}`, estado)}
                                />
                                :
                                <TiUserAddOutline
                                    size={24}
                                    onClick={() => showChangeStateModal(id, `${nombre} ${apellido}`, estado)}
                                />
                        }
                    </div>
                </td>
            </tr>
        </>
    )
}

