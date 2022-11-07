import React from "react";
import { Thead } from "../../../components/tableComponents/Thead";
import { UserRow } from "./UserRow";

export const UsersTable = ({ users, showForm, showChangeStateModal, cols}) => {
    return (
        <>
            <div className="row g-0 px-3">
                <div className="col-12">
                    <table className="table table-striped">
                        <Thead cols={cols} />
                        <tbody>
                            {users.map((user, key) => (
                                <UserRow
                                    key={key}
                                    user={user}
                                    showForm={showForm}
                                    showChangeStateModal={showChangeStateModal}
                                />
                            ))}                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
