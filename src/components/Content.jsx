import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Hamburguer from '../pages/Hamburguer.jsx';
import Pizza from '../pages/Pizza.jsx';
import Drink from '../pages/Drinks.jsx';
import Carrinho from '../pages/Carrinho.jsx';
import Sandwiches from '../data/sandwiches';
import Pizzas from '../data/pizzas.js';
import '../App.css'
import Drinks from '../data/drinks.js';


class Content extends React.Component {
  state = {
    product: '',
    cartCounter: 0,
    cartTotal: 0,
    itemPrice: 0,
    cartItem: [{
      name: '',
      img:'',
      ingredients: '',
    }],
  }

  handleChange= ({target}) =>{
    this.setState({
     product: target.value,
    })
   }

   addToCart=({target})=> {
    const {cartCounter, cartTotal, cartItem} = this.state;

    const itemPrice = target.parentNode.children[4].innerText;
    const getItemName = target.parentNode.children[0].innerText;
    const getItemImg = target.parentNode.children[1].src;
    const getItemIngredientes = target.parentNode.children[2].innerText;

    Sandwiches.map((sandwich)=> (
      sandwich.name === getItemName &&
      this.setState({
        cartItem: [...cartItem, {
          name: getItemName,
          img: getItemImg,
          ingredients: getItemIngredientes,
          price: itemPrice,
        }]
      })
    ))

    Pizzas.map((pizza)=> (
      pizza.name === getItemName &&
      this.setState({
        cartItem: [...cartItem, {
          name: getItemName,
          img: getItemImg,
          ingredients: getItemIngredientes,
          price: itemPrice,
        }]
      })
    ))

    Drinks.map((drink)=> (
      drink.name === getItemName &&
      this.setState({
        cartItem: [...cartItem, {
          name: getItemName,
          img: getItemImg,
          price: itemPrice,
        }]
      })
    ))
        
    this.setState ({
      cartCounter: cartCounter + 1,
      cartTotal: cartTotal + Number(itemPrice ),
    })  
  }
  
   removeToCart=({target})=> {
    const {cartCounter, cartTotal} = this.state;
    const itemPrice = target.parentNode.children[4].innerText;

    cartCounter <= 0 
    ? this.setState({cartCounter:0}) 
    : this.setState ({
      cartCounter: cartCounter - 1,
      cartTotal: cartTotal - Number(itemPrice ),
    })
   }

   removeFromCartList=({target})=>{
    const {cartCounter, cartTotal} = this.state;
    const itemPrice = target.parentNode.children[4].innerText;
    target.parentNode.remove();
    cartCounter <= 0 
    ? this.setState({cartCounter:0}) 
    : this.setState ({
      cartCounter: cartCounter - 1,
      cartTotal: cartTotal - Number(itemPrice),
    })
   }
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/hamburguer"
          render={(props)=><Hamburguer {...props}
          handleChange={this.handleChange}
          addToCart={this.addToCart}
          removeToCart={this.removeToCart}
          product={this.state.product}
          cartCounter={this.state.cartCounter}
          cartTotal={this.state.cartTotal}
          />}  />
          <Route exact path="/pizza" 
          render={(props)=><Pizza {...props}
          handleChange={this.handleChange}
          addToCart={this.addToCart}
          removeToCart={this.removeToCart}
          product={this.state.product}
          cartCounter={this.state.cartCounter}
          cartTotal={this.state.cartTotal}
          />} />
          <Route exact path="/drink"
          render={(props)=><Drink {...props}
          handleChange={this.handleChange}
          addToCart={this.addToCart}
          removeToCart={this.removeToCart}
          product={this.state.product}
          cartCounter={this.state.cartCounter}
          cartTotal={this.state.cartTotal}
          />} />
          <Route exact path="/carrinho"
          render={(props)=><Carrinho {...props}
          addToCart={this.addToCart}
          removeFromCartList={this.removeFromCartList}
          cartCounter={this.state.cartCounter}
          cartTotal={this.state.cartTotal}
          cartItem={this.state.cartItem}
          />} />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
