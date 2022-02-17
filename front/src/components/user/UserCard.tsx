import React from 'react';
import {IUser} from "../../types/user";

interface Props {
    user: IUser
}

const UserCard: React.FC<Props> = ({ user }) => {
    return(
        <div>
            {user.email}
        </div>
    );
}

export default UserCard;