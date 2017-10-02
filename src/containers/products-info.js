import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {removeAll} from '../actions/remove-all';
import {getData} from '../actions/get-data';
import RaisedButton from 'material-ui/RaisedButton';

class Info extends Component{

  componentDidMount(){
    fetch('./data/products-data.json', {
          mode: 'no-cors',
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
         })
      .then((response) => {
        if (response.status !== 200) {
          console.log('Status error: ' + response.status);
          return;
        } else {
          return response.json();
        }
      })
      .then((data)=>{
        this.props.getData(data)
      })
  }

  getTotalAmount(){
    let totalAmount = 0;
    for(let i = 0; i < this.props.data.length; i++){
      totalAmount += this.props.data[i].price
    }
    return totalAmount
  }

  getAverageAmount(){
    let averageAmount = 0;
    for(let i = 0; i < this.props.data.length; i++){
      averageAmount += this.props.data[i].price
    }
    if(!averageAmount) {
      return 0
    } else {
      return Math.round(averageAmount / this.props.data.length)
    }
  }

  render(){
    if(!this.props.data){return (
      <div className='loading-products-info'>
        <h1>loading...</h1>
      </div>
    )}
    if(this.props.data.length < 1){return (
      <div className='no-products-info'>
        <h1>there are no products to count</h1>
      </div>
    )}
    return(
      <div className='catalog-info'>
        <h3>total amount :  <span>{this.getTotalAmount()}</span> USD</h3>
        <h3>average amount :  <span>{this.getAverageAmount()}</span> USD</h3>
        <h3>total quantity :  <span>{this.props.data.length}</span></h3>
        {this.props.whoConnected === 'admin'?(<RaisedButton label='remove all' secondary={true} onClick={() => this.props.removeAll()} className='remove-all-button' />):''}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    whoConnected: state.whoConnected,
    data: state.data
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getData: getData,
    removeAll: removeAll
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Info));
