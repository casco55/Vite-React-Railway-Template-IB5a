import React from "react";

import { OrderForm } from "../features/orders/components/OrderForm";
import { useDisplayForms } from "../hooks/useDisplayForms";

export const Orders = () => {
    const {displayForm, showForm, closeForm} = useDisplayForms();
    return (
        <>
             <div className="row g-0 position-relative">
                <div className="d-flex flex-row py-3 ps-3">
                    <button className="btn btn-primary" onClick={showForm}>Agregar Orden</button>
                </div>
                {/* <OrdersTable /> */}
                {displayForm && <OrderForm id={0} close={closeForm} />}
             </div>
        </>
    )
}