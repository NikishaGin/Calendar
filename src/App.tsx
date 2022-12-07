import React from 'react';
import './App.css';
import {AppRouter} from "./Components/AppRouter";
import {NavBar} from "./Components/NavBar";
import {Layout} from "antd";

function App() {
    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;

