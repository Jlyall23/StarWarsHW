import React, {Component} from 'react';
import ShipSearch from './ShipContainer/ShipSearch';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenPage: null
    }
  }
  changePage = (e) => {
    console.log(e.target.id);
    this.setState({
      chosenPage: e.target.id
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.changePage} id="ships">Show me the Ships!!!</button>
     
        {
          this.state.chosenPage === null ?
            null
            :
            <ShipSearch></ShipSearch>
             
        }
      </div>
    );
  }
}

export default App;
