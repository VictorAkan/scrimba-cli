import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './styles/App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}


export default App;
