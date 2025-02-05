// import React from "react";

// function App() {
//   // let ele  = React.createElement("div" , {className:"App"} , 
//   //   React.createElement("h1" ,null, "Header")
//   // )
//   let username = "Maheshwari";
//   return (
//     // <div className="App">
//     //  <h1>Header</h1>
//     //  <input />
//     // </div>
//     // ele
//   //  <section>
//   //    <h1>One JSx element</h1>
//   //   <p>lorm3
//   //   </p>
//   //  </section>
// <div>
// <h1>{username}</h1>
//   <p>{100+100}</p>
// </div>
//   );
// }
// export default App;

// ! components

// !CBC
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Class based component</h1>
//     )
//   }
// }
// export default App;

// ! FBC

// function App(){
//   return(
//     <h1>Function based component</h1>
//   )
// }
// export default App;

//! OR

// const App=()=>{
//   return(
//     <h1>Arrow function component</h1>
//   )
// }
// export default App;

// ! component composition
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'
// import './global.css'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Main/>
      <div className='sidebar'>
      <Sidebar1/>
      <Sidebar2/>
      </div>
      <Footer/>
    </div>
  )
}

export default App

// !props
// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx username="Vamshi"/>
//       </div>
//     )
//   }
// }