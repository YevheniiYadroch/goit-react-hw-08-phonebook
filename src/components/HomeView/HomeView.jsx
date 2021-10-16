import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import Login from '../Login/Login';
import './HomeView.css';

function HomeView() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className="HomeView">
            <h1 className="HomeView_header">Добро пожаловать на лучший в мире сервис для безопасного хранения ваших контактов</h1>
            {isLoggedIn ?
                <Link className="HomeView_contacts" to="/contacts">Ваши контакты</Link>
                :
                <>
                    <Login/>
                    <p className="HomeView_text">Еще нет аккаунта на нашем сервисе?</p>
                    <Link className="HomeView_contacts HomeView_contacts_register" to="/register">Зарегистрироваться</Link>
                </>
            }
        </div>
    )
}

export default HomeView;
