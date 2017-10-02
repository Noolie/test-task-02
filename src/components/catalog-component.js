import React,{Component} from 'react';
import Catalog from '../containers/catalog';
import Info from '../containers/products-info';
import Header from './header';

class CatalogComponent extends Component{
  render(){
    return (
      <div className='main-page'>
        <Header />
        <Catalog />
        <Info />
      </div>
    )
  }
}

export default CatalogComponent;
