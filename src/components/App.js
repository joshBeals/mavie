import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

class App extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" exact element={<Landing />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;