import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiUserAddOutline, TiUserDeleteOutline } from "react-icons/ti";

export const ProductRow = ({
    product,
    showForm,
    showChangeStateModal,
    handleImageVisor
}) => {
    const {
        id,
        nombre,
        descripcion,
        precio,
        estado,
        imagen
    } = product;
    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{descripcion}</td>
                <td>{precio}</td>
                <td>
                    {estado ? "activo" : "inactivo"}
                </td>
                <td>
                    <img
                        src={`https://mymolback-production.up.railway.app/imgs/${imagen}`}
                        className="img-fluid cursor-pointer"
                        style={{ width: "30px" }}
                        onClick={() => handleImageVisor(imagen)}
                    />
                </td>
                <td className="d-flex flex-row text-light">
                    <div className="p-1 bg-warning cursor-pointer mx-1 rounded">
                        <MdOutlineModeEditOutline size={24} onClick={() => showForm(id)} />
                    </div>
                    <div className={`p-1 ${estado ? "bg-danger" : "bg-success"} cursor-pointer text-secundary mx1 rounded`}>
                        {
                            estado ?
                                <TiUserDeleteOutline size={24} onClick={() => showChangeStateModal(id, nombre, estado)} />
                                :
                                <TiUserAddOutline size={24} onClick={() => showChangeStateModal(id, nombre, estado)} />
                        }
                    </div>
                </td>
            </tr>
        </>
    )
}