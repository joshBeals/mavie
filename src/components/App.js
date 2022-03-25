import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Memories from './Memories';
import AddMemory from './Memories/New';
import Notes from './Notes';
import AddNote from './Notes/New';
import NoteDetails from './Notes/NoteDetails';

class App extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path="dashboard" element={<Dashboard />} />
                                <Route path="notes" element={<Notes />} />
                                    <Route path="notes/new" element={<AddNote />} />
                                    <Route path="note/:id" element={<NoteDetails />} />
                                <Route path="memories" element={<Memories />} />
                                    <Route path="memories/new" element={<AddMemory />} />
                                
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;