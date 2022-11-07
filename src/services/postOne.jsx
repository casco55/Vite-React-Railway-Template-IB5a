import axios from "axios";

export const postOne = async (url, pathName, data) => {
    try {
        const response = await axios.post(`${url}${pathName}`, data);
        return response.data;
    } catch (error) {
        return false;
    }
}