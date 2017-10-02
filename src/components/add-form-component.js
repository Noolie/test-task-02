import React,{Component} from 'react';
import Info from '../containers/products-info';
import AddForm from '../containers/add-form';
import Header from './header';

class AddFormComponent extends Component{
  render(){
    return (
      <div className='add-page'>
        <Header />
        <AddForm />
        <Info />
      </div>
    )
  }
}

export default AddFormComponent;
