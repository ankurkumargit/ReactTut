import React, { useState } from 'react';
import './App.css';
import Tweet from './tweet';
//import Tweet from './tweet'; //This is to be imported in order to use tweet.js
//import Hello from './sayHello'; //This is to be imported in order to use sayHello.js

//This example is to render Hello from sayHello.js
// function App(){

// return(
//   <div>
//     <Hello></Hello>
//   </div>
// );
// }


//This example is to render tweet.js
// function App() {

//   return (
//     <div className='app'>
//       <Tweet name='Chandler Bing' message='Can I interest you in sarcastic comment?' likes='-1'/>
//       <Tweet name='Monica Geller' message='I KNOW!!!' likes='3'/>
//       <Tweet name='Ross Geller' message='We were on a break!!!' likes='4'/>
//       <Tweet name='Joey Tribbiani' message="Joey doesn't share food" likes="4000"/>      
//     </div>
//   )
// }

//This example shows us the use of State, using useState from react library
// function App() {
//   const [isRed, setRed] = useState(false);
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     setRed(!isRed);
//   };

//   return (
//     <div className='app'>
//       <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
//       <button onClick={increment}>Increment</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }


//Dynamic Binding
function App() {
  const [users, setUsers] = useState([
    { name: 'Ed', message: 'Hi I am Ed!' },
    { name: 'John', message: 'Hi I am John!' },
    { name: 'Amit', message: 'Hi I am Amit!' },
  ]); //This is how we will call the API to get the users and set it to this users variable using useState


  //Dynamic rendering
  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes='3'></Tweet>
      ))}
    </div>
  );
}


export default App;