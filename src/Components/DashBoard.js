import React, { Component } from 'react'
import DataService from './Servieses/DataService'

class DashBoard extends Component {
  constructor() {
    super()
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    DataService.getDataService().then((response) => {
      this.setState({
        user: response.data
      })

      console.log(this.state.user)
    })
  }
  // handleRemove(id) {

  //   DataService.deleteDataService(id).then(res => {

  //     this.setState({

  //       users: this.state.users.filter(data => data.id !== id)

  //     });

  //   })

  // }


deleteCard = (id) =>{
  DataService.deleteData(id)
  .then( res =>{
    this.setState({
      user:this.state.user.filter( value => value.id !== id  )
    })
  }).catch( (error) =>{
    console.log( `${error}error` )
  } )
}

  render() {
    return (
      <div className='card-group ml-2 container'>
        {
          this.state.user.map((CurEle, i) => {
            return (
              <div key={i} className="card" style={{ width: "18rem" }} >
                <img src={CurEle.imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{CurEle.title}</h5>
                  <p className="card-text">  {CurEle.description} </p>
                  <p> {CurEle.author}</p>
                  <small> {CurEle.date} </small>
                  <br />
                  <button onClick={()=> this.deleteCard(CurEle.id)} className="btn btn-primary">Delete</button>
                </div>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default DashBoard
