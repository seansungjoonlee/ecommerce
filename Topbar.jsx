import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import {
  Link,Grid, AppBar, Toolbar, Typography
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginRight: 6,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className= {classes.root}>
        <AppBar position="static">
          <Typography  variant="h6" className={classes.grow}>
            Class 101
          </Typography>
          <Link component = {RouterLink} to={'/wishlist'}>
            <IconButton  aria-label="Cart" className={classes.cart}>
              <Badge badgeContent={100} color="primary">
                <ShoppingCartIcon className={classes.rightIcon}/>
              </Badge>
            </IconButton>
          </Link>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Topbar);
