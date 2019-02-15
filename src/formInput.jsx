import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class FormInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'product',
            qty: 0,
            price: 0,
            image: 'url'
        }
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateQty(e) {
        this.setState({
            qty: e.target.value
        })
    }

    updatePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    updateImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    handleClick() {
        let name = this.state.name;
        let qty = this.state.qty;
        let price = this.state.price;
        let image = this.state.image;
        this.props.addProduct(name, qty, price, image);
        //console.log(name+' '+qty+' '+price+' '+image)
    }

    render() {
        return (
            <div >
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input onChange={this.updateName.bind(this)} placeholder="Product Name" />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">qty</InputGroupAddon>
                    <Input onChange={this.updateQty.bind(this)} placeholder="Quota" type="number" step="1"/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                    <Input onChange={this.updatePrice.bind(this)} placeholder="Price" type="number"/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">http://</InputGroupAddon>
                    <Input onChange={this.updateImage.bind(this)} placeholder="Image Link"/>
                </InputGroup>
                <br />
                <Button onClick={this.handleClick.bind(this)}>
                Submit
                </ Button>
             </div>
        )
    }
}

export default FormInputs;