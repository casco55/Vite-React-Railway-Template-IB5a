import { useEffect, useState } from "react";
import { pathNameFoodPlaces, URL, URL_local } from "../../../helpers/endPoint";
import { getAll } from "../../../services/getAll";


export const usefoodPlacesData = () => {
    const initialState = [{
        id: 0,
        nombre: "",
        direccion: "",
        imagen: "",	
        estado: false,
        telefono: "",
        correo: "",
        hora_apertura: "",
        hora_cierre: "",
    }]
    const [foodPlaces, setFoodPlaces] = useState(initialState);
    const foodPlacesList = async () => {
        const response = await getAll(URL_local, pathNameFoodPlaces);
        if (response) {
            setFoodPlaces(response);
        }
    }
    useEffect(() => {
          foodPlacesList();  
    },[])
    return {
        foodPlaces,
        foodPlacesList
    }
    
}