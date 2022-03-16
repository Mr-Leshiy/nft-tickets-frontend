import React from 'react';
import './App.css';
import PolkaWallet from './polka/wallet';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-integration">
            <PolkaWallet/>
        </div>
      </div>
    );
  }

}

export default App;
