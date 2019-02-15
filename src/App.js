import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import FormInputs from './formInput';
//import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: 0,
          name: 'product',
          qty: 0,
          price: 0,
          image: 'url'
      }
      this.addProduct = this.addProduct.bind(this)
      this.addProducts = this.addProducts.bind(this)
  }

  addProduct(name,qty,price,image) {
      this.setState({
          id: 4,
          name: {name},
          qty: {qty},
          price: {price},
          image: {image}
      })

      this.addProducts();
  }

  addProducts() {
      this.ProductDatabase.push(this.state)
  }

  ProductDatabase = [
      {
          id: 1,
          name: 'iPhone XS Max',
          qty: 43,
          price: 21000000,
          image: 'https://www.bellmts.ca/file_source/mts/content_types/wireless_devices/iphones/Apple-iPhone-XsMax@2x.png'
      },
      {
          id: 2,
          name: 'Razer Kraken',
          qty: 12,
          price: 2500000,
          image: 'https://assets.razerzone.com/press/kraken-xbox-one/razer-kraken-xbox-one-1.png'
      },
      {
          id: 3,
          name: 'Dell Alienware R15',
          qty: 57,
          price: 33000000,
          image: 'https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf5684639e34.png'
      }
  ]
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <FormInputs addProduct={this.addProduct} />
            <br></br>
            <Table dark striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quota</th>
                <th>Price</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {this.ProductDatabase.map(function(product) {
                    return (
                        <tr>
                            <td>{Object.values(product)[0]}</td>
                            <td>{Object.values(product)[1]}</td>
                            <td>{Object.values(product)[2]}</td>
                            <td>{Object.values(product)[3]}</td>
                            <td><img src={Object.values(product)[4]} height="100px" width="100px" ></img></td>
                        </tr>
                    )
                })}
            
            </tbody>
            </Table>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
