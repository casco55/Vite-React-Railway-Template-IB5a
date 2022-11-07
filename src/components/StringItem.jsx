import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const StringItem = ({
    item,
    index,
    listName,
    deleteItem
}) => {
    return (
        <div className="d-flex flex-row items-align-center px-2 bg-mute me-2 mt1 rounded-pill">
            <p className="me-1 my-auto">
                {item}
            </p>
            <AiOutlineCloseCircle
                className="my-auto cursor-pointer"
                size={20}
                onClick={() => deleteItem(listName, index)}
            />            
        </div>
    )
}
