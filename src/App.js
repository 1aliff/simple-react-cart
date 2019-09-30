import React, { Component } from 'react'
import { Button } from 'reactstrap';
import logo from './chair.jpg';

const initialState = {
  price: 0,
  quantity: 0,
  tax : 2.99,
  total : 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price : 0,
      quantity : 0,
      tax : 2.99,
      total : 0,
      initialState
    }
    this.incrementPrice = this.incrementPrice.bind(this);
    this.decrementPrice = this.decrementPrice.bind(this);
    this.proceedCart = this.proceedCart.bind(this);
    this.reset = this.reset.bind(this);
  }
  incrementPrice(){
    this.setState (
      {
      quantity: this.state.quantity + 1,
      price: this.state.price + 9
      },
        () => { 
          console.log("quantity: " + this.state.quantity)
          console.log("price: $" + this.state.price)
      }
    )
  }
  decrementPrice(){
    if(this.state.quantity > 0){
    this.setState ({
      quantity: this.state.quantity - 1,
      price : this.state.price - 9
    },
      () => {
        console.log("quantity: " + this.state.quantity)
        console.log("price: $" + this.state.price)
      }
    )
    }
  }
  proceedCart(){
    if(this.state.quantity > 0){
      alert('Item added to cart');
      this.reset();
    } else {
      alert('PLEASE ADD ITEM!')
    }
  }
  reset() {
      this.setState(initialState);
  }

  render() {
    return (
      <div className="container">
        <h2>Scandinavian Chair</h2><br />
        <img src={logo} alt="chair" width="250" height="250" />
        <hr />

        Price: ${this.state.price} <br />
        Quantity : 
        <Button color="link" size="sm" onClick={this.decrementPrice}>-</Button>
        {this.state.quantity}
        <Button color="link" size="sm" onClick={this.incrementPrice}>+</Button>
        <br />
        Service Tax : ${this.state.tax}

        <hr/>

        <h4>
          Total (Inclusive Tax) : ${this.state.quantity * this.state.price + this.state.tax}
        </h4>
        <br />
        <hr />
        <Button color="success" onClick={this.proceedCart}>Add To Cart</Button>{' '}

      </div>
    )
  }
}

export default App
