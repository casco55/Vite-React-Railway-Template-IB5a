import React from "react";
import { ChangeStateModal } from "../components/ChangeStateModal";
import { UserForm } from "../features/users/components/UserForm";
import { UsersTable } from "../features/users/components/UsersTable";
import { userTableCols } from "../features/users/helpers/userTableCols";
import { useUsersData } from "../features/users/hooks/useUsersData";
import { pathNameUsers } from "../helpers/endPoint";
import { UseChangeState } from "../hooks/useChangeState";
import { useDisplayForms } from "../hooks/useDisplayForms";
export const Users = () => {
    const {
        id,
        displayForm,
        showForm,
        closeForm
    } = useDisplayForms();
    const {
        users,
        usersList
    } = useUsersData();
    const {
        displayChangeStateModal,
        nameDel,
        idDel,
        state,
        changeOneState,
        showChangeStateModal,
        closeChangeStateModal
    } = UseChangeState(pathNameUsers, 'Usuario');
    return (
        <>
            <div className="row g-0 position-relative">
                <div className="d-flex flex-row py-3 ps-3">
                    <button className="btn btn-primary" onClick={() => showForm(id)}>Agregar Usuario</button>
                </div>

                <UsersTable
                    users={users}
                    showForm={showForm}
                    showChangeStateModal={showChangeStateModal}
                    cols={userTableCols}
                />
                {displayForm &&
                    <UserForm
                        id={id}
                        close={closeForm}
                        usersList={usersList}
                    />
                }
                {displayChangeStateModal &&
                    <ChangeStateModal
                        name={nameDel}
                        id={idDel}
                        state={state}
                        changeStateFn={changeOneState}
                        closeChangeStateModal={closeChangeStateModal}
                        listFn={usersList}
                    />
                }
            </div>
        </>
    )
}