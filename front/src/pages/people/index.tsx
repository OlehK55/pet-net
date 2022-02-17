import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectUsersList } from "../../redux/selectors/user";
import { fetchUsersListStart } from "../../redux/action-creators";
import UserCard from "../../components/user/UserCard";


export default function People() {
    const userList = useSelector(selectUsersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersListStart());
    },[]);

    return (
        <div className="some-class">
            People page
            {
                (userList !== {}) ?
                    Object.values(userList).map(item =>
                        <UserCard key={// @ts-ignore
                            item.uid } user=
                                      { // @ts-ignore
                                          item }/>
                    ) : 'No users'
            }
        </div>
    )
}