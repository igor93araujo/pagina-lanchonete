import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { GiFullPizza, GiBeerBottle } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'

export default class Header extends Component {


  render() {
    return (
      <header>
        <nav>
          <Link 
            to='/hamburguer'
          >
            <FaHamburger className='icon'/>
          </Link>
          <Link
            to='/pizza'
          >
            <GiFullPizza className='icon'/>
          </Link>
          <Link
            to='/drink'
          >
            <GiBeerBottle className='icon'/>
          </Link>
          <Link
            to='/carrinho'
            className='carrinho'
          >
            <TiShoppingCart className='icon'/>
          </Link>
          <div className='resume'>
            <p> {`Quantidade: ${this.props.cartCounter} ite${this.props.cartCounter!== 1 ? 'ns' : 'm'}`}</p>
            <p>Valor total: {`R$ ${ this.props.cartTotal },00`}</p>
          </div>
        </nav>
      </header>
    )
  }
}
