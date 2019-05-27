import React from 'react';
import '../styles/App.css';
import LeftMenu from './menu/LeftMenu.js';
import TopBar from './menu/TopBar.js';
import Router from './Router.js';

function App() {
    return (
        <div className='App'>
            <LeftMenu/>
            <div className='content-container'>
                <TopBar/>
                <div className='content'>
                    <Router />
                </div>
            </div>
        </div>
    );
}

export default App;
