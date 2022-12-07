import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Router";
import {Login} from "../pages/Login";
import {Event} from "../pages/Event";
import {useTypedSelector} from "../Hooks/useTypedSelector";

export const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.isAuth)


    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(privateRoutes =>
                    <Route key={privateRoutes.path}  path={privateRoutes.path} element={<Event/>}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(publicRoutes =>
                    <Route key={publicRoutes.path} path={publicRoutes.path} element={<Login/>}/>
                )}
            </Routes>

    );
};
