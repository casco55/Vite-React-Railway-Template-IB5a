import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const OrderForm = ({ id, close }) => {
    return (
        <>
            <div className="position-absolute top-0 bg-light">
                <div className="d-flex flex-row justify-content-end">
                    <AiOutlineCloseCircle className="cursor-pointer" size={48} onClick={() => close()} />
                </div>
            </div>
        </>
    )
}

