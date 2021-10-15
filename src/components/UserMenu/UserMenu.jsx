import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import authSelectors from '../../redux/auth/auth-selectors';
import './UserMenu.css';
 
function UserMenu() {
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);
    return (
        <div className="UserMenu">
            <p className="UserMenu_email">{email}</p>
            <button className="UserMenu_button" type="button" onClick={()=>{dispatch(authOperations.logout())}}>Выйти</button>
        </div>
    )
}

export default UserMenu;