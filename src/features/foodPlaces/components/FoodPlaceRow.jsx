import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiUserAddOutline, TiUserDeleteOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";


export const FoodPlaceRow = ({ foodPlace, showForm, showChangeStateModal, handleImageVisor }) => {
    const { id, rut, nombre, direccion, imagen, estado, telefono, correo, hora_apertura, hora_cierre } = foodPlace;

    return (
        <>
            <tr>
                <td>{rut}</td>
                <td>{nombre}</td>
                <td>{direccion}</td>
                <td>{telefono}</td>
                <td>{correo}</td>
                <td>
                    {estado ? "activo" : "inactivo"}
                </td>
                <td>{hora_apertura}</td>
                <td>{hora_cierre}</td>
                <td>
                    <img
                        src={`https://mymolback-production.up.railway.app/imgs/${imagen}`} alt={nombre}
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
                    <NavLink
                        className="p-1 d-flex flex-row nav-link bg-primary cursor-pointer mx-1 rounded"
                        end to={`/foodPlaces/${id}/products`}
                    ><IoFastFoodSharp size={24} /></NavLink>
                </td>
            </tr>
        </>
    )
}
