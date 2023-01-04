import React from 'react';
import Header from '../components/Header';
import Pizzas from '../data/pizzas'
import './pizza.css';
import '../App.css';

class Pizza extends React.Component {
  render () {
    return (
    <div className='conteiner-full'>
      <Header />
      <div>
      <p>Pizzas</p>
      <section className='conteiner-products'>
        {
          Pizzas.map((pizza) => (
            <div className='item'>
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
      </div>
    )
  }
}

export default Pizza;