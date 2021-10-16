import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './Login.css';
import TextField from '@mui/material/TextField';


function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFormReset = () => {
        setEmail('');
        setPassword('');
  }

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.login({ email, password }));
        handleFormReset();
    }

    return (
        <div className="Login">
            
            <form className="LoginForm" onReset={handleFormReset} onSubmit={handleSubmit}>
                <div className="LoginForm__inputWrapper">
                    <TextField
                    label="E-mail"
                    variant="standard"
                    className="LoginForm__input"
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Введите Ваш реальный адресс электронной почты"
                    required
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInput-root:before': {
                            borderBottom: "1px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: "2px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
                            borderBottom: "2px solid rgb(149, 241, 206)"
                        },
                        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                            color: 'rgb(149, 241, 206)'
                        },
                        '& .css-wgai2y-MuiFormLabel-asterisk': {
                            display: 'none'
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root': {
                            color: 'rgb(149, 241, 206)'
                        }
                    }}
                    autoComplete="none"
                />
                <TextField
                    label="Password"
                    className="LoginForm__input"
                    variant="standard"
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Пароль должен содержать не менее чем 7 символов"
                    required
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInput-root:before': {
                            borderBottom: "1px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: "2px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
                            borderBottom: "2px solid rgb(149, 241, 206)"
                        },
                        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                            color: 'rgb(149, 241, 206)'
                        },
                        '& .css-wgai2y-MuiFormLabel-asterisk': {
                            display: 'none'
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root': {
                            color: 'rgb(149, 241, 206)'
                        }
                    }}
                    autoComplete="none"
                />
                </div>
                <button type="submit"  className="LoginForm__button">Войти</button>
            </form>
        </div>
        )
}

export default Login;
