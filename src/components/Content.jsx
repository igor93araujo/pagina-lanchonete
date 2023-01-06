import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Hamburguer from '../pages/Hamburguer.jsx';
import Pizza from '../pages/Pizza.jsx';
import Drink from '../pages/Drinks.jsx';
import Carrinho from '../pages/Carrinho.jsx';


class Content extends React.Component {
  state = {
    product: '',
    cartCounter: 0,
    cartTotal: 0,
  }

  handleChange= ({target}) =>{
    this.setState({
     product: target.value,
    })
   }

   addToCart=({target})=> {
    const {cartCounter, cartTotal} = this.state;

    const itemPrice = target.parentNode.children[4].innerText;

    this.setState ({
      cartCounter: cartCounter + 1,
      cartTotal: cartTotal + Number(itemPrice )
    })
   }


   removeToCart=({target})=> {
    const {cartCounter, cartTotal} = this.state;

    const itemPrice = target.parentNode.children[4].innerText;

    this.setState ({
      cartCounter: cartCounter + 1,
      cartTotal: cartTotal - Number(itemPrice )
    })
   }
  
  render() {
    return (
      <main>
        <Carrinho />
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
          <Route exact path="/carrinho" compornent = { Carrinho }/>
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
