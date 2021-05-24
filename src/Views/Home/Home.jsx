import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Navbar />
        <div className="main">
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
          <Card firstName="Simon" lastName="Dupont" avatar="https://randomuser.me/api/portraits/men/9.jpg" country="France" email="deny@gmail.com" id="1NNaN60703326 22" telephone="0831723243435" />
        </div>
      </div>
    )
  }
}
