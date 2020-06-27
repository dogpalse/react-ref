import React from 'react';
import './App.css';
import Validation from './Validation';
import ScrollBox from './ScrollBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {this.ScrollBox = ref;}} />
        <button onClick={() => {this.ScrollBox.scrollToBottom()}}>밑으로</button>
      </div>
    )
  }
}

export default App;
