import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Dashboard';
import Landing from './Landing';

class App extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" exact element={<Landing />} />
                            <Route path="/login" exact element={<Login />} />
                            <Route path="/register" exact element={<Register />} />
                            <Route path="/dashboard" exact element={<Dashboard />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;