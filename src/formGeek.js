import React, { Component } from 'react';
import './App.css';
class Geek extends Component {
  render() {
    return (
      <div className="container">
        <h1>form</h1>
         <form>
             <input type="text" placeholder='enter name'/><br/>
             <input type="password"  placeholder='enter password'/><br/>
             <input type="email" placeholder='enter email'/><br/>
             <input type="number" placeholder='enter phoneno.'/><br/>
              <button type="submit">submit</button>
             </form>
      </div>
    );
  }
}

export default Geek;
