import React from 'react';
import Header from '../components/Header';
import Pizzas from '../data/pizzas'
import './pizza.css';

class Pizza extends React.Component {
  render () {
    return (
    <div>
      <Header />
      <p>Pizzas</p>
      <section className='conteiner-pizzas'>
        {
          Pizzas.map((pizza) => (
            <div className='pizza'>
              <p>{pizza.name}</p>
              <img src={pizza.image} alt="imagemSand" />
              <p>{`Ingredientes: ${pizza.ingredients}`}</p>
              <p>{`R$ ${pizza.preço},00`}</p>
              <p>+</p>
            </div>
          ))
      }
      </section>
      </div>
    )
  }
}

export default Pizza;