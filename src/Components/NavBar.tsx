import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../Router";
import {useTypedSelector} from "../Hooks/useTypedSelector";

export const NavBar = () => {

    const router = useNavigate()
    const {isAuth} = useTypedSelector(state => state.isAuth)

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ?
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: "white"}}>Nikita</div>
                        <Menu.Item key={1}>Выйти</Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={()=>router(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

