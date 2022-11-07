import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { pathNameFoodPlaces, URL, URL_local } from "../../../helpers/endPoint";
import { getOne } from "../../../services/getOne";
import { postOne } from "../../../services/postOne";
import { putOne } from "../../../services/putOne";


export const useFoodPlaceForm = (id, foodPlaceList) => {
    const initialState = {
        rut: "",
        nombre: "",
        direccion: "",
        imagen: "",
        estado: true,
        telefono: "",
        correo: "",
        hora_apertura: "",
        hora_cierre: ""
    }
    const [foodPlaceForm, setFoodPlaceForm] = useState(initialState);
    const [typeForm, setTypeForm] = useState("create");
    const [foodPlaceImage, setFoodPlaceImage] = useState(null);
    const getSingleFoodPlace = async (id) => {
        const response = await getOne(URL_local, pathNameFoodPlaces, id);
        if (response) {
            setFoodPlaceForm(response);
            setTypeForm("update");
        }
    }
    useEffect(() => {
        if (id !== 0) {
            getSingleFoodPlace(id);
        }
    }, [id])
    const { rut, nombre, direccion, imagen, estado, telefono, correo, hora_apertura, hora_cierre } = foodPlaceForm;
    const handleInputChange = ({ target }) => {
        setFoodPlaceForm({
            ...foodPlaceForm,
            [target.name]: target.value
        })
    }
    const fileImageList = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/bmp",
        "image/tiff",
    ]
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && fileImageList.includes(file.type)) {
            setFoodPlaceImage(file);
            return
        }
        setFoodPlaceImage(null);
        const input = document.getElementById("FoodPlaceImage");
        input.value = "";
    }
    const putSingleFoodPlace = async (id) => {
        const formData = new FormData();
        formData.append("rut", rut);
        formData.append("nombre", nombre);
        formData.append("direccion", direccion);
        formData.append("estado", estado);
        formData.append("telefono", telefono);
        formData.append("correo", correo);
        formData.append("hora_apertura", hora_apertura);
        formData.append("hora_cierre", hora_cierre);
        formData.append("archivo", foodPlaceImage);
        const response = await putOne(URL_local, pathNameFoodPlaces, id, formData);
        if (response) {
            foodPlaceList();
            Swal.fire({
                title: "Success",
                text: "Food Place updated",
                icon: "success",
                confirmButtonText: "Ok"
            })
        }
    }
    const postNewFoodPlace = async () => {
        const formData = new FormData();
        formData.append("rut", rut);
        formData.append("nombre", nombre);
        formData.append("direccion", direccion);
        formData.append("estado", estado);
        formData.append("telefono", telefono);
        formData.append("correo", correo);
        formData.append("hora_apertura", hora_apertura);
        formData.append("hora_cierre", hora_cierre);
        formData.append("archivo", foodPlaceImage);
        const response = await postOne(URL_local, pathNameFoodPlaces, formData);
        if (response) {
            foodPlaceList();
            Swal.fire({
                title: "Success",
                text: "Restaurant created",
                icon: "success",
                confirmButtonText: "Ok"
            })
            return
        }
    }
    const handleSubmit = () => {

        if (typeForm === "create") {
            postNewFoodPlace();
            return
        }
        if (typeForm === "update") {
            putSingleFoodPlace(id);
            return
        }
    }

    return {
        rut,
        nombre,
        direccion,
        imagen,
        estado,
        telefono,
        correo,
        hora_apertura,
        hora_cierre,
        foodPlaceImage,
        handleInputChange,
        handleFileChange,
        handleSubmit,
        typeForm
    }
}
