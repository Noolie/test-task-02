import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {removeOne} from '../actions/remove-one';
import {getData} from '../actions/get-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/remove';

class Catalog extends Component{

  showProducts(){
    return this.props.data.map((item, i, currentData) => {
      return (
        <li key={item.id} className='item-block'>
          {this.props.whoConnected === 'admin'?(<FloatingActionButton mini={true}  secondary={true} className='item-remove-button' onClick={()=>this.props.removeOne(item)}><ContentAdd /></FloatingActionButton>):''}
          <h2 className='item-name'>{item.name}</h2>
          <img className='item-image' src={item.image} alt={item.name}/>
          <p className='item-price'>{item.price} <span>USD</span></p>
          <p className='item-description'>{item.description}</p>
        </li>
      )
    })
  }

  render(){
    if(!this.props.data){
      return (
        <div className='loader'>
          <div className='loader-item'></div>
          <div className='loader-item'></div>
          <div className='loader-item'></div>
        </div>
      )
    }

    return (
        <ul className='catalog'>
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={1000}>
          {this.showProducts()}
          </ReactCSSTransitionGroup>
        </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.data,
    whoConnected: state.whoConnected
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getData: getData,
    removeOne: removeOne
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Catalog));
