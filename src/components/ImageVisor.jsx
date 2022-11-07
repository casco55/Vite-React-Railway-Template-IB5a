import React from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"

export const ImageVisor = ({imagen, close}) => {
    return (
        <div className="position-absolute top-0 d-flex flex-column full-height z-index-20 bg-dark-semi">
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-end">
                        <AiOutlineCloseCircle className="cursor-pointer mt-2 me-2" size={48} onClick={() => close()} />
                    </div>
                </div>
            </div>
            <img 
                src={`https://mymolback-production.up.railway.app/imgs/${imagen}`} 
                className="img-fluid col-4 mx-auto my-auto" 
                alt="imagen" 
            />
        </div>
    )
}