import axios from "axios";

export const putOne = async (url, pathName, id, data) => {
    try {
        const response = await axios.put(`${url}${pathName}${id}`, data);
        return response.data;
    } catch (error) {
        return false;
    }
}