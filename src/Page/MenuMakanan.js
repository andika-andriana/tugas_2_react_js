import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan';
import ImgNasiPadang from '../Images/nasipadang.jpg';
import ImgSate from '../Images/sate.png';
import ImgSotoLamongan from '../Images/sotolamongan.png';
import ImgNasiKentut from '../Images/nasikentut.png';
import ImgNasiKuning from '../Images/nasikuning.jpg';

class MenuMakanan extends Component{
  render(){
    return(
      <div>
      <center>
        <h3>Makanan Yang Kami Sediakan: </h3>
        <table>
          <tbody>
            <tr>
              <td><ListMakanan ImgProduct={ImgNasiPadang}/></td>
              <td><ListMakanan ImgProduct={ImgSate}/></td>
              <td><ListMakanan ImgProduct={ImgSotoLamongan}/></td>
              <td><ListMakanan ImgProduct={ImgNasiKentut}/></td>
              <td><ListMakanan ImgProduct={ImgNasiKuning}/></td>
            </tr>
          </tbody>
        </table>
      </center>
      </div>
    );
  }
}

export default MenuMakanan;
