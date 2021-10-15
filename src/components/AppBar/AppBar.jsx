import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import './AppBar.css';

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const fetchingCurrentUser = useSelector(authSelectors.getFetchingCurrentUser);

    return (
        <header className="AppBar">
            <nav className="AppBar_nav">
                <NavLink className="AppBar_link" to="/">Главная</NavLink>
                {isLoggedIn && <NavLink className="AppBar_link" to="/contacts">Контакты</NavLink>}
            </nav>
            {!fetchingCurrentUser && 
                isLoggedIn ?
                <UserMenu />
                :
                <div className="AppBar_nav">
                    <NavLink className="AppBar_link" to="/register">Регистрация</NavLink>
                    <NavLink className="AppBar_link" to="/login">Войти</NavLink>
                </div>
            }
        </header>
        )
}

export default AppBar;