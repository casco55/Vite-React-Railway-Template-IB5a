import React from "react";
import { Thead } from "../../../components/tableComponents/Thead";
import { FoodPlaceRow } from "./FoodPlaceRow";

export const FoodPlacesTable = ({ 
    foodPlaces, 
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
                            {foodPlaces.map((foodPlace, key) => (
                                <FoodPlaceRow  
                                    key={key} 
                                    foodPlace={foodPlace} 
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
