import React from 'react';
import Header from '../components/Header';
import Sandwiches from '../data/sandwiches.js'
import '../App.css';
import { MdOutlineFastfood } from 'react-icons/md'

class Hamburguer extends React.Component {
  render () {
    const { product, cartCounter, cartTotal, handleChange, addToCart, removeFromCartList } = this.props
    return (
      <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      <div className='conteiner-header-products'>
      <div className='conteiner-filter'>
      <div className='conteiner-logo'>
      <MdOutlineFastfood className='logo'/>
      <h1>Lanchonete Mata-Fome</h1>
      </div>
      <div className='conteiner--filter'>
      <input
        type="text"
        value={product}
        id='product'
        name='product'
        onChange={handleChange}
        placeholder="Filtre um sabor"
        />
      <p>Hambúrgueres</p>
      </div>
      </div>
      <section className='conteiner-products'>
        {
          Sandwiches
          .filter((item)=> item.name.toLowerCase().includes(product.toLowerCase()))
          .map((obj) => (
            <div className='item' key={obj.name}>
              <p>{obj.name}</p>
              <img src={obj.image} alt="imagemSand" />
              <p>{`Ingredientes: ${obj.ingredients}`}</p>
              <p>{`R$ ${obj.preço}, 00`}</p>
              <button
                type='button'
                onClick={()=>addToCart(obj.preço, obj.name, obj.image, obj.ingredients)}
              >Adicionar ao carrinho</button>
              <button
                type='button'
                onClick={()=>removeFromCartList(obj)}
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