import React, { Component } from 'react';
import ListMenuUtama from '../ListData/ListMenuUtama';
import ImgFood1 from '../Images/food1.jpg';

class MenuUtama extends Component {
  render(){
    return(
      <div>
        <ListMenuUtama gambar1={ImgFood1}/>
      </div>
    );
  }
}

export default MenuUtama;
