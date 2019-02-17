import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class FormInputs extends React.Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.qtyInput = React.createRef();
        this.priceInput = React.createRef();
        this.imageInput = React.createRef();
        this.myForm = React.createRef();
    }

    handleClick(e) {
        e.preventDefault()
        this.props.addProduct(this.nameInput.current.value, this.qtyInput.current.value, this.priceInput.current.value, this.imageInput.current.value);
        this.myForm.reset()
    }

    render() {
        return (
            <form ref={myform => this.myForm = myform}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input innerRef={this.nameInput} placeholder="Product Name" />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">qty</InputGroupAddon>
                    <Input innerRef={this.qtyInput} placeholder="Quota" type="number" step="1"/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                    <Input innerRef={this.priceInput} placeholder="Price" type="number"/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">http://</InputGroupAddon>
                    <Input innerRef={this.imageInput} placeholder="Image Link"/>
                </InputGroup>
                <br />
                <Button onClick={this.handleClick.bind(this)}>
                Submit
                </ Button>
             </form>
        )
    }
}

export default FormInputs;