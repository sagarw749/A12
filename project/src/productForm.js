

import React, { Component } from 'react';

//clear the form values
const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component
{
    constructor(props) 
    {
        super(props)
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       };
       
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
   }
   
    //handler for submit button
    handleSave(e) 
    {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
   }
   
   handleChange(e) 
   {
    const target = e.target
    const value = target.value
    const name = target.name
    //sets the changed value
    this.setState((prevState) => {
         prevState.product[name] = value
         return { product: prevState.product }
    });
}

    render()
    {    
        return(
            <div>
                <form >
                    <h2>Add a new product</h2>
                    
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" className="form-control" name="name"  onChange={this.handleChange} value={this.state.product.name}></input>
                    </div> 
                    <div className="form-group">
                        <label for="category">Category</label>
                        <input type="text" id="category" className="form-control" name="category"  onChange={this.handleChange} value={this.state.product.category}></input>
                    </div> 
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="text" id="price" className="form-control" name="price" onChange={this.handleChange} value={this.state.product.price}></input>
                    </div> 
                  
                    <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </form>
            </div>
        );
    }
}
export default ProductForm;


