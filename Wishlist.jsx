import React from 'react';
import {
  Divider
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';




class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInWishlist: this.props.productsInWishlist
    }
  }

  displayList() {
    let itemList = this.state.productsInWishlist.map(item=>{
      return(
        <div>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4> {item.title} </h4>
            </div>
            <FormControl className="col-sm-2 text-right">
              <Input
                value={this.state.val}
                endAdornment={<InputAdornment position="end">개</InputAdornment>}
              />
            </FormControl>
          </div>
          <div className="row btn-toolbar">
            <Checkbox
              checked={true}
            />
          </div>
          <Divider />
        </div>
      )
    })
    return itemList;
  }


  render() {
    return(
      <div>
        {this.displayList()}
      </div>
    )
  }
}

export default Wishlist;
