import { useEffect, useState } from "react";
import { pathNameFoodPlaces, URL_local } from "../../../helpers/endPoint";
import { getImage } from "../../../services/getImage";

export const useGetFoodPlaceImage = (image) => {    
    const [foodPlaceImage, setFoodPlaceImage] = useState();
    const getFoodPlaceImage = async () => {
        const response = await getImage(URL_local, pathNameFoodPlaces, 
        image);
        if (response) {
            setFoodPlaceImage(response.file);
        }
    }
    useEffect(() => {
        if(image !== ""){
            getFoodPlaceImage();
        }
    }
    , [image])
    
    return {
        foodPlaceImage
    };
}