


import React, {Component} from 'react';

class ProductRow extends Component
{
    constructor(props) 
    {
        super(props)
        this.destroy = this.destroy.bind(this)
    }
   
    destroy() 
    {
        this.props.onDestroy(this.props.product.id);
    }
   
    render()
    {
        var name = this.props.product.name;
        var category = this.props.product.category;
        var price = this.props.product.price;
        return(
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td><button type="button" className="btn btn-info" onClick={this.destroy}>Delete</button></td>
            </tr>
        );
    }
}
export default ProductRow;