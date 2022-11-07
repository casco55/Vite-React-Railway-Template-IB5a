import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { pathNameFoodPlaces, URL_local } from "../../../helpers/endPoint";
import { getOne } from "../../../services/getOne";
import { getProductsByRestaurant } from "../services/getProductsByRestaurant";

export const useProductsData = () => {
    const initialStateRestaurant = {
        nombre: '',
        telefono: '',
        correo: ''
    }
    const { id_restaurante } = useParams();
    const [products, setProducts] = useState([]);
    const [restaurant, setRestaurant] = useState(initialStateRestaurant);
    const productsList = async (id) => {
        const response = await getProductsByRestaurant(URL_local, pathNameFoodPlaces, id);
        if (response) {
            setProducts(response);
        }
    }
    const getRestaurant = async (id) => {
        const response = await getOne(URL_local, pathNameFoodPlaces, id);
        if (response) {
            setRestaurant({
                nombre: response.nombre,
                telefono: response.telefono,
                correo: response.correo,
            });
        }
    }
    useEffect(() => {
        if (id_restaurante) {
            getRestaurant(id_restaurante);
        }
    }, [id_restaurante]);
    useEffect(() => {
        productsList(id_restaurante);
    }, [id_restaurante]);

    return {
        restaurant,
        id_restaurante,
        products,
        productsList
    }
}
