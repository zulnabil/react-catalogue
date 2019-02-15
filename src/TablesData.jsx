import React from 'react';
import { Table } from 'reactstrap';
import FormInputs from './formInput';

class TablesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: 'product',
            qty: 0,
            price: 0,
            image: 'url'
        }
    }

    addProduct(name,qty,price,url) {
        let currObj = {
            id: this.ProductDatabase[this.ProductDatabase.length],
            name: {name},
            qty: {qty},
            price: {price},
            image: {url}
        }
        this.ProductDatabase.push(currObg)
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
            image: 'url'
        },
        {
            id: 2,
            name: 'Razer Kraken',
            qty: 12,
            price: 2500000,
            image: 'url'
        },
        {
            id: 3,
            name: 'Dell Alienware R15',
            qty: 57,
            price: 33000000,
            image: 'url'
        }
    ]
    render() {
      return (
        <div>
            <FormInputs />
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
                            <td>{Object.values(product)[4]}</td>
                        </tr>
                    )
                })}
            
            </tbody>
            </Table>
        </div>
      );
    }
  }

  export default TablesData;