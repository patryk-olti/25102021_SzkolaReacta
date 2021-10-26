import React from "react";

import UsersForm from "../Containers/utilis/UsersForm";

const Users = ({ setLogged }) => {

    return(
        <div>
            <UsersForm handleClick={setLogged} />
        </div>
    )
}

export default Users;