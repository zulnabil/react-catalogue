import React from 'react';

class RenderProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products } = this.props
        return (
            <tbody>
            {products.map((product, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>{product.price}</td>
                        <td><img src={product.image} height="100px" width="100px" alt={product.name} /></td>
                        <td><img onClick={this.props.deleteProduct} src="https://png.pngtree.com/svg/20170121/delete_286553.png" style={{cursor:'pointer'}} height="35px" width="35px" alt={product.name} /></td>
                    </tr>
                )
            })}
        </tbody>
        )
    }
}

export default RenderProduct;