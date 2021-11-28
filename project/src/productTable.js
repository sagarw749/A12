


import React, { Component } from 'react';
import ProductRow from './productRow.js';

class ProductTable extends Component
{
    constructor(props) 
    {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }
   
    handleDestroy(id) 
    {
        this.props.onDestroy(id)
    }
    render()
    {
       const {filterText} = this.props;
        const {products} = this.props;

        var rows = [];
        Object.values(products).forEach((product) => {
          if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
            return;
          }
        
          rows.push(<ProductRow product={product} key={product.id} onDestroy={this.handleDestroy}></ProductRow>);
          
        });

        return(
            <div>
                <table className ="table table-striped  table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                     {rows}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ProductTable;