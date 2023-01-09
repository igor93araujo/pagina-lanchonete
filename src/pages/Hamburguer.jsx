import React from 'react';
import Header from '../components/Header';
import Sandwiches from '../data/sandwiches.js'
import '../App.css';

class Hamburguer extends React.Component {
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
      <p>Hambúrgueres</p>
      <section className='conteiner-products'>
        {
          Sandwiches
          .filter((item)=> item.name.toLowerCase().includes(product.toLowerCase()))
          .map((obj) => (
            <div className='item' key={obj.name}>
              <p>{obj.name}</p>
              <img src={obj.image} alt="imagemSand" />
              <p>{`Ingredientes: ${obj.ingredients}`}</p>
              <span>R$</span>
              <span>{obj.preço}</span>
              <span>,00</span>
              <button
                type='button'
                onClick={()=>addToCart(obj.preço, obj.name, obj.image, obj.ingredients)}
              >Adicionar ao carrinho</button>
              <button
                type='button'
                onClick={()=>removeToCart(obj)}
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

export default Hamburguer;