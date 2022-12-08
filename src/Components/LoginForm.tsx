import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../Store/Reducers/auth/action-creator";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {useActions} from "../Hooks/useActions";

export const LoginForm = () => {

    const {error, isLoading} = useTypedSelector(state => state.isAuth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useActions()

    const submit = () => {
        login(username,password)
    }

    return (
        <Form onFinish={submit}>
            <div>
                {error && <div style={{color:'red'}}>
                    {error}
                </div>}
            </div>
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
            >
                <Input value={username} onChange={(e)=> setUsername(e.currentTarget.value)} />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
            >
                <Input value={password} type={'password'} onChange={(e)=> setPassword(e.currentTarget.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

