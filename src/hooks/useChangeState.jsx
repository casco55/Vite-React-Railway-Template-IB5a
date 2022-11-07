import { useState } from "react";
import Swal from "sweetalert2";
import { URL, URL_local } from "../helpers/endPoint";
import { changeState } from "../services/changeOneState";

export const UseChangeState = (pathName, type) => {
    const [nameDel, setNameDel] = useState('');
    const [idDel, setIdDel] = useState(0);
    const [state, setState] = useState(false);
    const [displayChangeStateModal, setDisplayChangeStateModal] = useState(false);

    const changeOneState = async (id, state, list, optionalId) => {
        const response = await changeState(URL_local, pathName, id, state
        );
        if (response) {
            Swal.fire({
                title: `${type} eliminado`,
                icon: "success",
                confirmButtonText: "Ok"
            })
            setState(false);
            setDisplayChangeStateModal(false);
            setNameDel("");
            setIdDel(0);
            optionalId ? list(optionalId) : list();
            return
        }
    }
    const showChangeStateModal = (id, name, state) => {
        setIdDel(id);
        setNameDel(name);
        setState(state);
        setDisplayChangeStateModal(true);
    }
    const closeChangeStateModal = () => {
        setDisplayChangeStateModal(false);
        setNameDel("");
        setIdDel(0);
        setState(false);
    }
    return {
        displayChangeStateModal,
        nameDel,
        idDel,
        state,
        changeOneState,
        showChangeStateModal,
        closeChangeStateModal
    }
}