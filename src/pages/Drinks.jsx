import React from 'react';
import Header from '../components/Header';
import Drinks from '../data/drinks'
import './drink.css';
import '../App.css';

class Drink extends React.Component {
  render () {
    const { product, cartCounter, cartTotal, handleChange, addToCart, removeToCart } = this.props
    return (
    <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      <div className='conteiner-header-products'>
      <input
        type="text"
        value={product}
        id='product'
        name='product'
        onChange={handleChange}
        placeholder="Filtre um sabor"
        />
      <p>Bebidas</p>
      <section className='conteiner-products'>
        {
          Drinks.map((drink) => (
            <div className='item'>
              <p>{drink.name}</p>
              <img src={drink.image} alt="imagemSand" />
              <p/>
              <span>R$</span>
              <span>{drink.preço}</span>
              <span>,00</span>
              <button
                type='button'
                onClick={addToCart}
              >Adicionar ao carrinho</button>
               <button
                type='button'
                onClick={()=>removeToCart(drink)}
              >Remover do carrinho</button>
            </div>
          ))
      }
      </section>
      </div>
      </div>
    )
  }
}

export default Drink;