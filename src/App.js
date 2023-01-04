import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Content />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
