import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { pathNameRoles, pathNameUsers, URL, URL_local } from "../../../helpers/endPoint";
import { getAll } from "../../../services/getAll";
import { getOne } from "../../../services/getOne";
import { postOne } from "../../../services/postOne";
import { putOne } from "../../../services/putOne";

export const useUserForm = (id, usersList) => {
    const initialState = {
        rut: "",
        nombre: "",
        apellido: "",
        direccion: "",
        correo: "",
        contraseña: "",
        telefono: "",
        estado: false,
        id_rol: 0
    }
    const [userFormValues, setUserFormValues] = useState(initialState);
    const [typeForm, setTypeForm] = useState("create");
    const [roles, setRoles] = useState([]);
    const getSingleUser = async (id) => {
        const response = await getOne(URL_local, pathNameUsers, id);
        if (response) {
            setUserFormValues(response);
            setTypeForm("update");
        }
    }
    const getRoles = async () => {
        const response = await getAll(URL_local, pathNameRoles);
        if (response) {
            setRoles(response);
        }
    }
    useEffect(() => {
        getRoles();
    }, []);

    useEffect(() => {
        if (id !== 0) {
            getSingleUser(id);
        }
    }, [id])
    const {
        rut,
        nombre,
        apellido,
        direccion,
        correo,
        contraseña,
        telefono,
        estado,
        id_rol
    } = userFormValues;
    const handleInputChange = (e) => {
        setUserFormValues({
            ...userFormValues,
            [e.target.name]: e.target.value
        })
    }
    const handleSelectChange = (e) => {
        setUserFormValues({
            ...userFormValues,
            [e.target.name]: parseInt(e.target.value)
        })
    }
    const putSingleUser = async (id) => {
        const putData = {
            ...userFormValues
        }
        const response = await putOne(URL_local, pathNameUsers, id, putData);
        if (response) {
            usersList();
            Swal.fire({
                title: "Success",
                text: "User updated successfully",
                icon: "success",
                confirmButtonText: "Ok"
            })
        }
    }
    const postNewUser = async () => {
        const response = await postOne(URL_local, pathNameUsers,userFormValues);
        if (response) {
            usersList();
            Swal.fire({
                title: "Success",
                text: "User created successfully",
                icon: "success",
                confirmButtonText: "Ok"
            })
        }
    }
    const deleteItem = (listName, index) => {
        const list = userFormValues[listName];
        list.splice(index, 1);
        setUserFormValues({
            ...userFormValues,
            [listName]: list
        })
    }
    const handleSubmit = () => {
        if (typeForm === "create") {
            postNewUser();
            return
        }
        if (typeForm === "update") {
            putSingleUser(id);
            return
        }        
    }
    return {
        typeForm,
        rut,
        nombre,
        apellido,
        direccion,
        correo,
        contraseña,
        telefono,
        estado,
        id_rol,
        roles,
        deleteItem,
        getSingleUser,
        handleInputChange,
        handleSelectChange,
        handleSubmit
    }
};
