import React, { Component } from 'react'
import Header from '../components/Header'
import '../App.css';

export default class Carrinho extends Component {

  render() {
    const {cartCounter, cartItem, cartTotal, removeFromCartList} =this.props
    return (
      <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      
        {cartItem.length === 1 ? <p className='noItems'>Não há itens no carrinho.</p>
      :
      <div className='conteiner-products'>
      {
        cartItem.filter((item,index) => (index>=1)).map((item) => (
          <div className='item'>
              <p>{item.name}</p>
              <img src={item.img} alt="imagemSand" />
              if (item.ingredientes === undefined) {
                <p>Geladinho!</p>
              } else {
              <p>{`Ingredientes: ${item.ingredients}`}</p>
              }
              <span>R$</span>
              <span>{item.price}</span>
              <span>,00</span>
              <button
                type='button'
                onClick={removeFromCartList}
              >Remover do carrinho</button>
            </div>
        ))
      }
      </div>}
      </div>
    )
  }
}
