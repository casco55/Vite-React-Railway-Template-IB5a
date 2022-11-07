import axios from "axios";

export const getOne = async (url, pathName, id) => {
    try {
        const response = await axios.get(`${url}${pathName}${id}`);
        return response.data;
    } catch (error) {
        return false;
    }
}
