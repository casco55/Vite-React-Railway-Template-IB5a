import { useEffect, useState } from "react";
import { pathNameUsers, URL, URL_local } from "../../../helpers/endPoint";
import { getAll } from "../../../services/getAll";
export const useUsersData = () => {
    const initialState = [{
        id: 0,
        rut: "",
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        estado: false,
        id_rol: 0,        
    }]
    const [users, setUsers] = useState(initialState);
    const usersList = async () => {
        const response = await getAll(URL_local, pathNameUsers);
        if (response) {
            setUsers(response);
        }
    }
    useEffect(() => {
        usersList();
    }, [])
    return {
        users,
        usersList 
    }

}
