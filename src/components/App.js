import React, { Component } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Memories from './Memories';
import AddMemory from './Memories/New';
import Notes from './Notes';
import AddNote from './Notes/New';
import NoteDetails from './Notes/NoteDetails';
import history from '../helpers/history';
import MemoryDetails from './Memories/MemoryDetails';

class App extends Component {
    render(){
        return(
            <div>
                <HistoryRouter history={history}>
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
                                    <Route path="memory/:id" element={<MemoryDetails />} />
                                
                        </Routes>
                    </div>
                </HistoryRouter>
            </div>
        );
    }
}

export default App;