import React, { Component } from 'react'
import ApiServices from '../../Configs/Services/API/index'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
export default class Home extends Component {
  state = {
    workerList: []
  }
  getFromApi = () => {
    ApiServices.getWorkerData()
    .then((res)=>{
      this.setState({
        workerList: res.results
      })
    })
  }
  componentDidMount(){
    this.getFromApi()
  }
  render() {
    return (
      <div id="home">
        <Navbar />
        <div className="main">
            { 
              this.state.workerList.map(
                data => {
                  return <Card
                  key={data.id.value}
                  firstName={data.name.first}
                  lastName={data.name.last}
                  avatar={data.picture.large}
                  country={data.location.country}
                  email={data.email}
                  id={data.id.value}
                  telephone={data.phone}
                  />
                }
              )
            }
        </div>
      </div>
    )
  }
}
