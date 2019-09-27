import React from 'react';

function Hello(){
    const sayHello = () => {
      console.log('Hello');
    };
  
    return(
      <div>
          <h3>This is the sayHello.js saying Hello</h3>
        <button onClick={sayHello}>Hello</button>
      </div>
    );
}

export default Hello;