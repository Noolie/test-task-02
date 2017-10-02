import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {introduce} from '../actions/introduce';

import CatalogComponent from './catalog-component';
import AddFormComponent from './add-form-component';

import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  render() {

    if(!this.props.whoConnected) {
      return (
        <div className='login-check'>
          <RaisedButton className='admin-button' label='admin' primary={true} onClick={()=>this.props.introduce('admin')} />
          <RaisedButton className='user-button' label='user' primary={true} onClick={()=>this.props.introduce('user')} />
        </div>
      )
    }

    return (
      <div className='app'>
          <Route exact path='/' component={CatalogComponent} />
          <Route path='/add' component={AddFormComponent} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    whoConnected: state.whoConnected
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    introduce: introduce
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(App);
