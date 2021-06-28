import React from 'react';
import Sidebar from  './Sidebar';

import './App.css';


function App() {
  return (
    //Following the BEM convention
    <div className="app">
      <h1>Hola</h1>

      {/*Side*/}
      <Sidebar/>

      {/*Feed*/}

      {/*Widgets*/}
    </div>
  );
}

export default App;
