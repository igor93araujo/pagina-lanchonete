import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import './App.css'
import { AiOutlineLinkedin } from 'react-icons/ai'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Content />
          <footer>
            <p>
          Desenvolvido por Igor Barbosa <a href='https://www.linkedin.com/in/barbosaigor16/'><AiOutlineLinkedin className='linkedInLogo'/></a> e Jefferson Donizete <a href='https://www.linkedin.com/in/jefferson-donizete-do-nascimento-a381b2212/'><AiOutlineLinkedin className='linkedInLogo'/></a>
          </p>
          <p>01/2023</p>
        </footer>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
