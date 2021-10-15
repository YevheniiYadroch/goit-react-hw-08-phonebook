import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {authOperations} from '../../redux/auth'
import './Register.css';

function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFormReset = () => {
        setName('');
        setEmail('');
        setPassword('');
  }

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        handleFormReset();
    }

    return (
        <>
            <h2>Регистрация</h2>
            <form className="RegisterForm" onReset={handleFormReset} onSubmit={handleSubmit}>
                <label htmlFor="name" className="RegisterForm__name">Name</label>
                <input
                    className="RegisterForm__input"
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                />
                <label htmlFor="email" className="RegisterForm__email">E-mail</label>
                <input
                    className="RegisterForm__input"
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Введите Ваш реальный адресс электронной почты"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password" className="RegisterForm__password">Password</label>
                <input
                    className="RegisterForm__input"
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Пароль должен содержать хотя бы одну цифру, буквы верхнего и нижнего регистра и состоять из не менее чем 8 символов"
                    required
                    onChange={handleChange}
                />
                <button type="submit"  className="RegisterForm__button">Зарегистрироваться</button>
            </form>
        </>
        )
}

export default Register;
