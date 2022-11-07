import React from "react";
export const SelectInput = ({ name, label, value, onChange, options }) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="input-group my-2 d-flex flex-column col">
                <label 
                    htmlFor={name}
                    className="form-label"    
                >
                    {label}
                </label>
                <select
                    name={name}
                    id={name}
                    className="form-select w-100"
                    value={value}
                    onChange={onChange}
                >
                    <option value="0">Seleccione</option>
                    {
                        options.map((option) => (
                            <option key={option.id} value={option.id}>{option.nombre}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
