

import React, {Component} from 'react';

class Filter extends Component
{
    constructor(props) 
    {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(e) 
    {
        const value = e.target.value
        const name = e.target.name
   
        this.props.onFilter({
             [name]: value
        });
   }
   
    render()
    {
        return(
            <form >
                <div className="form-group" >
                    <input type="text" 
                        id="search_text" 
                        className="form-control "
                        name="filterText" 
                        value={this.props.filterText}
                        onChange={this.handleChange}  
                        placeholder="Search..."></input>
                </div>
            </form>
        );
    }
}

export default Filter;