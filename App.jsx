import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import {
  Grid, Paper
} from '@material-ui/core';
import Products from './Products';
import Topbar from './Topbar';
import Wishlist from './Wishlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInWishlist: [],
    }
    this.addToWishlist = this.addToWishlist.bind(this);
  }

  addToWishlist(id) {
    var temp = this.state.productsInWishlist.push(id);
    this.setState({
      productsInWishlist: temp
    })
    console.log(id)
    console.log("inside app")
    console.log(this.state.productsInWishlist)
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
        <Topbar/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={12}>
          <Paper className="main-grid-item">
            <Switch>
              <Route path="/wishlist" render={props => <Wishlist {...props} productsInWishlist={this.state.productsInWishlist} />}/>
              <Route exact path="/"
                render={props => <Products {...props} addToWishlist={this.addToWishlist}/>}
              />
              <Route exact path="/products"
                render={props => <Products {...props} addToWishlist={this.addToWishlist}/>}
              />

            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
      </HashRouter>

    )
  }
}

export default App;
