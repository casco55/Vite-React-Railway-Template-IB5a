import React from "react";
import { ChangeStateModal } from "../components/ChangeStateModal";
import { ImageVisor } from "../components/ImageVisor";
import { ProductForm } from "../features/products/components/ProductForm";
import { ProductsHeader } from "../features/products/components/ProductsHeader";
import { ProductsTable } from "../features/products/components/ProductsTable";
import { productTableCols } from "../features/products/helpers/productTableCols";
import { useProductsData } from "../features/products/hooks/useProductsData"
import { pathNameProducts } from "../helpers/endPoint";
import { UseChangeState } from "../hooks/useChangeState";
import { useDisplayForms } from "../hooks/useDisplayForms";
import { useImageVisor } from "../hooks/useDisplayImageVisor";

export const Products = () => {
    const {
        restaurant,
        id_restaurante,
        products,
        productsList
    } = useProductsData();
    const {
        id,
        displayForm,
        showForm,
        closeForm
    } = useDisplayForms();
    const {
        image,
        imageVisor,
        handleImageVisor,
        closeImageVisor
    } = useImageVisor();
    const {
        displayChangeStateModal,
        nameDel,
        idDel,
        state,
        changeOneState,
        showChangeStateModal,
        closeChangeStateModal
    } = UseChangeState(pathNameProducts, 'Producto');
    return (
        <>
            <div className="row g-0 position-relative">
                <ProductsHeader
                    restaurant={restaurant}
                />
                <div className="d-flex flex-row py-1 ps-3">
                    <button className="btn btn-primary" onClick={() => showForm(0)}>Agregar Producto</button>
                </div>
                <ProductsTable
                    products={products}
                    showForm={showForm}
                    showChangeStateModal={showChangeStateModal}
                    cols={productTableCols}
                    handleImageVisor={handleImageVisor}
                />
                {displayForm &&
                    <ProductForm
                        id={id}
                        close={closeForm}
                        id_restaurante={id_restaurante}
                        productsList={productsList}
                        handleImageVisor={handleImageVisor}
                    />
                }
                {displayChangeStateModal &&
                    <ChangeStateModal
                        name={nameDel}
                        id={idDel}
                        state={state}
                        changeStateFn={changeOneState}
                        closeChangeStateModal={closeChangeStateModal}
                        listFn={productsList}
                        optionalId={id_restaurante}
                    />
                }
                {imageVisor &&
                    <ImageVisor
                        imagen={image}
                        close={closeImageVisor}
                    />
                }

            </div>
        </>
    )
}