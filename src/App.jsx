import React from 'react';

import Header from "./Header";

import Note from './Note.jsx';

import Footer from "./footer"

import info from  './info';


function App(){
    return(<div>
        <Header />
        {info.map(noteItem =>(
            <Note
        key={noteItem.id}
        title={noteItem.title}
        content={noteItem.content}
        />
        ))}
        <Footer />
        </div>
    );
}

export default App;