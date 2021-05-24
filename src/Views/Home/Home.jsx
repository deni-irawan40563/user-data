import React, { Component } from 'react'
import ApiServices from '../../Configs/Services/API/index'
import './Home.css'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
export default class Home extends Component {
  state = {
    workerList: [],
    error: false
  }
  getFromApi = () => {
    ApiServices.getWorkerData()
    .then((res)=>{
        this.setState({
          workerList: res.results
        })        
        localStorage.setItem('data', JSON.stringify(this.state.workerList))
    })
    .catch(()=>{
      this.setState({
        error : !this.state.error
      })
    })
  }
  componentDidMount(){
    if(localStorage.getItem('data') === null){
      this.getFromApi()
    }else{
      this.setState({
        workerList: JSON.parse(localStorage.getItem('data'))
      })
    }
  }
  render() {
    if(this.state.error){
      return <h1 className="error">connection with API failed, please turn on your internet connection or check .env file on this project <br /> *Please read README for more information</h1>
    }
    return (
      <div
        id="home"
      >
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
