import axios from "axios";

export const changeState = async (url, pathName, id, state) => {
    try {
        const value = {
            estado: !state
        }
        const response = await axios.patch(`${url}${pathName}${id}`, value);
        return response.data;
    } catch (error) {
        return false;
    }
}