import React from "react";
import { Thead } from "../../../components/tableComponents/Thead";
import { ProductRow } from "./productRow";

export const ProductsTable = ({
    products,
    showForm,
    showChangeStateModal,
    cols,
    handleImageVisor
}) => {
    return (
        <>
            <div className="row g-0 px-3">
                <div className="col-12">
                    <table className="table table-striped">
                        <Thead cols={cols} />
                        <tbody>
                            {products.map((product, key) => (
                                <ProductRow
                                    key={key}
                                    product={product}
                                    showForm={showForm}
                                    showChangeStateModal={showChangeStateModal}
                                    handleImageVisor={handleImageVisor}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}