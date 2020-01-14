import React from 'react';
import {   Button } from '@material-ui/core'  

function Ipin() {
  return (
    <div className="App">
      <header className="App-header">
        <p color="">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button  type='submit'    color='primary'>          Create        </Button> 
        <Button  type='submit'    color='secondary'>          Create        </Button>      
        <a
          className="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Ipin;
