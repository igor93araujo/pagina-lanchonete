import React from 'react';
import Header from '../components/Header';
import Sandwiches from '../data/sandwiches.js'
import './sandwiches.css';

class Hamburguer extends React.Component {
  render () {
    return (
    <div>
      <Header />
      <p>Hambúrgueres</p>
      <section className='conteiner-burguers'>
        {
          Sandwiches.map((sandwich) => (
            <div className='sandwich'>
              <p>{sandwich.name}</p>
              <img src={sandwich.image} alt="imagemSand" />
              <p>{`Ingredientes: ${sandwich.ingredients}`}</p>
              <p>{`R$ ${sandwich.preço},00`}</p>
              <p>+</p>
            </div>
          ))
      }
      </section>
      </div>
    )
  }
}

export default Hamburguer;