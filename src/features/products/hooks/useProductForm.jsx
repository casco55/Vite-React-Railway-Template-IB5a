import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { pathNameProducts, URL_local } from "../../../helpers/endPoint";
import { getOne } from "../../../services/getOne";
import { postOne } from "../../../services/postOne";
import { putOne } from "../../../services/putOne";

export const useProductForm = (id, id_restaurante, productsList) => {
    const initialState = {
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: '',
    }
    const [productFormValues, setProductFormValues] = useState(initialState)
    const [typeForm, setTypeForm] = useState('create')
    const [productImage, setProductImage] = useState(null);
    const { nombre, descripcion, imagen, precio, estado } = productFormValues;
    const getSingleProduct = async (id) => {
        const response = await getOne(URL_local, pathNameProducts, id);
        if (response) {
            setProductFormValues({
                nombre: response.nombre,
                descripcion: response.descripcion,
                imagen: response.imagen,
                precio: response.precio,
                estado: response.estado,
            });
        }
    }
    useEffect(() => {
        if (id !== 0) {
            getSingleProduct(id);
            setTypeForm('update');
        }
    }, [id]);
    const handleInputChange = (e) => {
        setProductFormValues({
            ...productFormValues,
            [e.target.name]: e.target.value
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
            setProductImage(file);
            return
        }
        setProductImage(null);
        const input = document.getElementById("productImage");
        input.value = "";
    }
    const postNewProduct = async () => {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('archivo', productImage);
        formData.append('id_restaurante', id_restaurante);


        const response = await postOne(URL_local, pathNameProducts, formData);
        if (response) {
            Swal.fire({
                title: "Success",
                text: "Product updated successfully",
                icon: "success",
                confirmButtonText: "Ok"
            })
            productsList(id_restaurante);
        }
    }
    const putSingleProduct = async (id) => {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('archivo', productImage);
        formData.append('id_restaurante', id_restaurante);
        const response = await putOne(URL_local, pathNameProducts, id, formData);
        if (response) {
            Swal.fire({
                title: "Success",
                text: "Product updated successfully",
                icon: "success",
                confirmButtonText: "Ok"
            })
            productsList(id_restaurante);
        }
    }
    const handleSubmit = () => {
        if (typeForm === 'create') {
            postNewProduct();
        } else {
            putSingleProduct(id);
        }
    }
    return {
        nombre,
        descripcion,
        precio,
        imagen,
        handleInputChange,
        handleFileChange,
        handleSubmit,
        typeForm
    }



}
