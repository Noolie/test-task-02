import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {addProduct} from '../actions/add-product';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddForm extends Component{
  constructor(){
    super();
    this.state = {
      isEmptyName: true,
      isEmptyPrice: true,
      nameField: '',
      descriptionField: '',
      priceField: 0,
      imageField: ''
    }
  }

  successMsg(){
    let span = document.createElement('SPAN');
    span.classList.add('add-success');
    span.innerHTML = 'New product added';
    document.querySelector('.app').appendChild(span);
    setTimeout(()=>{
      span.classList.add('move-to-right');
    },50)
    setTimeout(()=>{
      span.classList.add('reduce-opacity');
    },1500)
    setTimeout(()=>{
      document.querySelector('.app').removeChild(span);
    },2500)
  }

  sendNewProduct = () =>{
    let obja = {
      id: Date.now().toString(),
      name: this.refs.addName.getValue(),
      image: this.refs.addImage.getValue() || 'https://dummyimage.com/200x200/000/fff',
      description: this.refs.addDescription.getValue() || 'brand new product, so we have no description',
      price: Number(this.refs.addPrice.getValue())
    }
    setTimeout(()=>{
      this.setState({
        nameField: '',
        descriptionField: '',
        priceField: 0,
        imageField: ''
      })
    },10)
    this.successMsg();
    return this.props.addProduct(obja);
  }

  checkName(ev){
    this.setState({
      nameField: ev.target.value
    });
    ev.target.maxLength = 20;
    if(ev.target.value.trim().length > 0){
      this.setState({isEmptyName: false})
    } else {
      this.setState({isEmptyName: true})
    }
  }
  checkDescription(ev){
    this.setState({
      descriptionField: ev.target.value
    });
  }
  checkImage(ev){
    this.setState({
      imageField: ev.target.value
    });
  }
  checkPrice(ev){
    this.setState({
      priceField: ev.target.value
    });
    if(Number(ev.target.value) > 10000) {ev.target.value = 99999}
    if(Number(ev.target.value.trim().length) > 0 && Number(ev.target.value > 0)){
      this.setState({isEmptyPrice: false})
    } else {
      this.setState({isEmptyPrice: true})
    }
  }

  render(){
    if(this.props.whoConnected !== 'admin') {
      return(
        <div className='not-allowed-to-add'>
          <h1>sorry, you are not allowed to add products</h1>
          <Link to='/' className='return-to-shop'><RaisedButton label='return to shop' primary={true}/></Link>
        </div>
      )
    }
    return (
      <div className='add-field'>
        <h2>add new product</h2>
        <div className='add-name-block'>
          <TextField floatingLabelText='Name' ref='addName' type='text' className='add-name' onChange={this.checkName.bind(this)} value={this.state.nameField} />
        </div>
        <div className='add-description-block'>
          <TextField hintText='Not necessary' maxLength='50' floatingLabelText='Description' ref='addDescription' type='text' className='add-description' onChange={this.checkDescription.bind(this)} value={this.state.descriptionField}/>
        </div>
        <div className='add-image-block'>
          <TextField hintText='Not necessary' floatingLabelText='Image' ref='addImage' type='text' className='add-image' onChange={this.checkImage.bind(this)} value={this.state.imageField}/>
        </div>
        <div className='add-price-block'>
          <TextField floatingLabelText='Price' ref='addPrice' type="number" pattern="[0-9]*" inputMode="numeric" className='add-price' onChange={this.checkPrice.bind(this)} value={this.state.priceField}/>
        </div>
        <RaisedButton label='ADD' primary={true} className='add-button' disabled={this.state.isEmptyName || this.state.isEmptyPrice} onClick={this.sendNewProduct.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.data,
    whoConnected: state.whoConnected
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators ({
    addProduct: addProduct
  }, dispatch)
}

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(AddForm));
