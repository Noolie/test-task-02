import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class Header extends Component{

  render(){
    return (
      <Toolbar style={{
        height: '80px',
        minHeight: '80px',
        backgroundColor: '#00BCD4',
        padding: '10px',
      }}>
        <ToolbarGroup>
          <IconMenu iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <Link to='/'><MenuItem primaryText="All products"></MenuItem></Link>
            <Link to='/add'><MenuItem primaryText="Add product"></MenuItem></Link>
          </IconMenu>
        </ToolbarGroup>
        <img className='logo' height='60' src='http://ossystem.com.ua/wp-content/themes/SkiffOSS/assets/img/logo.png' alt='logo' />
      </Toolbar>
    )
  }
}

export default Header;
