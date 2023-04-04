import React from 'react';
import Header from '../components/Header';
import '../App.css';
import { ImSad } from 'react-icons/im'
import { MdOutlineFastfood } from 'react-icons/md'

class Carrinho extends React.Component {
  render () {
    const {cartCounter, cartTotal,compras, removeFromCartList,removeAll} = this.props;
    return (
      <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      <div className='conteiner-filter'>
      <MdOutlineFastfood className='logo'/>
      <h1>Lanchonete Mata-Fome</h1>
      </div>
      <section className='conteiner-cart'>
        
      {
      compras.length === 0 ?
      <p className='noItems'>
         Não há itens no carrinho  <ImSad />
      </p>
      :
      <><h1 className='cartTitle'> Carrinho </h1>
      {
        compras.length === 0 ? '' : 
      <button
      type='button'
      onClick={()=>removeAll()}
      className='clear-button'
      >Remover tudo</button>
      }
      <div className='conteiner-cart-products'>
                {compras.map((obj,index) => (
                  <div className='item' key={`carrinho-${index}`}>
                    <p>{obj.name}</p>
                    <img src={obj.img} alt="objImage" />
                    <p>{obj.ingredients && `Ingredientes: ${obj.ingredients}`}</p>
                    <p>{`R$ ${obj.price}, 00`}</p>
                    <button
                      type='button'
                      onClick={() => removeFromCartList(obj)}
                    >Remover do carrinho</button>
                  </div>
                ))}
              </div></>
      }
      </section>
      </div>
    )
  }
}

export default Carrinho;