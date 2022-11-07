import React from "react";
export const ChangeStateModal = ({
    name,
    id,
    state,
    changeStateFn,
    closeChangeStateModal,
    listFn,
    optionalId = null
}) => {

    return (
        <div className="modal fade show" style={{ display: "block" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Eliminar Local</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeChangeStateModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>¿Está seguro que desea cambiar el estado de <strong>{name}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeChangeStateModal}>Cerrar</button>
                        <button type="button" className="btn btn-danger" onClick={() => changeStateFn(id, state, listFn, optionalId)}>{
                            !state ? 'Activar' : 'Desactivar'
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
