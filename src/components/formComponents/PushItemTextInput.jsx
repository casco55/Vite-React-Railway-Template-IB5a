import React from "react";
import { StringItem } from "../StringItem";

export const PushItemTextInput = ({
        label,
        name,
        id,
        value,
        listName,
        list,
        onChange,
        placeholder,
        push,
        deleteItem
    } ) => {
    return(
        <>
            <div className="row col-11 mx-auto">
                <div className="input-group my-2, d-flex flex-column px-2">
                    <label htmlFor={name}>{label}</label>
                    <div className="d-flex flex-row">
                        <input
                            type="text"
                            name={name}
                            id={id}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            className="form-control"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => push(listName, name, value)}
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    {list.map((item, index) => (
                        <StringItem
                            key={index}
                            item={item}
                            index={index}
                            listName={listName}
                            deleteItem={deleteItem}
                        />
                    ))}
                </div>
            </div>
        </>
    )

}
