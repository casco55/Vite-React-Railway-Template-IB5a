import axios from "axios";

export const getProductsByRestaurant = async (url, pathName, id) => {

    try {
        const response = await axios.get(`${url}${pathName}${id}/productos`);
        return response.data;
    } catch (error) {
        return false;
    }
}