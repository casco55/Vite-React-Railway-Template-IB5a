import axios from "axios";

export const getAll = async (url, pathName) => {
    try {
        const response = await axios.get(`${url}${pathName}`);
        return response.data;
    } catch (error) {
        return false
    }
}