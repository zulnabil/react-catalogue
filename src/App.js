import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import FormInputs from './formInput';
import RenderProduct from './RenderProducts';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          products: [
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
          ],
      }
      this.addProduct = this.addProduct.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
  }

  addProduct(name, qty, price, image) {
      this.setState(({ products }) => ({
        products: products.concat({
            id: products.length+1,
            name: name,
            qty: qty,
            price: price,
            image: image
        })
      }))
  }

  deleteProduct(choose) {
      this.setState({products: this.state.products.filter(function(product) {
        return product.name !== choose.target.alt
      })})

      // this.setState(({ products }) => ({
      //     //products: products.splice(choose,1)
      //     products: products.filter(product => product.name !== choose.target.alt)
      // }))
  }

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
                      <th>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {this.state.products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.qty}</td>
                                <td>{product.price}</td>
                                <td><img src={product.image} height="100px" width="100px" alt={product.name} /></td>
                                <td><img onClick={this.deleteProduct.bind(this)} src="https://png.pngtree.com/svg/20170121/delete_286553.png" style={{cursor:'pointer'}} height="35px" width="35px" alt={product.name} /></td>
                            </tr>
                        )
                    })}
                </tbody> */}
                <RenderProduct products={this.state.products} deleteProduct={this.deleteProduct} />
            </Table>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
