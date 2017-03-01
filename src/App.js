import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
              <a href="/"><li>Home</li></a>
              <a href="users"><li>Users</li></a>
               <a href="widgets"><li>Widgets</li></a>
            </ul>

           {this.props.children}
         </div>
      )
   }
}

export default App;
