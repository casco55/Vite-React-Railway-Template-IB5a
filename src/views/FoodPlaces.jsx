import React from "react";
import { ChangeStateModal } from "../components/ChangeStateModal";
import { ImageVisor } from "../components/ImageVisor";
import { FoodPlaceForm } from "../features/foodPlaces/components/FoodPlaceForm";
import { FoodPlacesTable } from "../features/foodPlaces/components/FoodPlacesTable"
import { foodPlaceTableCols } from "../features/foodPlaces/helpers/foodPlaceTableCols";
import { usefoodPlacesData } from "../features/foodPlaces/hooks/useFoodPlacesData";
import { pathNameFoodPlaces } from "../helpers/endPoint";
import { UseChangeState } from "../hooks/useChangeState";
import { useDisplayForms } from "../hooks/useDisplayForms";
import { useImageVisor } from "../hooks/useDisplayImageVisor";

export const FoodPlaces = () => {
    const {
        id,
        displayForm,
        showForm,
        closeForm
    } = useDisplayForms();
    const { foodPlaces, foodPlacesList } = usefoodPlacesData();
    const {
        displayChangeStateModal,
        nameDel,
        idDel,
        state,
        changeOneState,
        showChangeStateModal,
        closeChangeStateModal
    } = UseChangeState(pathNameFoodPlaces, 'Restaurante');
    const {
        image,
        imageVisor,
        handleImageVisor,
        closeImageVisor
    } = useImageVisor();
    return (
        <>
            <div className="row g-0 position-relative">
                <div className="d-flex flex-row py-3 ps-3">
                    <button className="btn btn-primary" onClick={() => showForm(0)}>Agregar Local</button>
                </div>
                <FoodPlacesTable
                    foodPlaces={foodPlaces}
                    showForm={showForm}
                    showChangeStateModal={showChangeStateModal}
                    cols={foodPlaceTableCols}
                    handleImageVisor={handleImageVisor}
                />
                {displayForm &&
                    <FoodPlaceForm
                        id={id}
                        close={closeForm}
                        foodPlaceList={foodPlacesList}
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
                        listFn={foodPlacesList}
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