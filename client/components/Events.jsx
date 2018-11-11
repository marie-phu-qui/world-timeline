import React from 'react'

import { getEvents } from '../utils/TimelineApi'

class Events extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        events:[{
            date: '',
            country: '',
            title: '',
            event: '',
            source:''
        }]
    }

    this.getEvents = this.getEvents.bind(this)
  }

  getEvents() {
    getEvents()
      .then(res => {
        this.setState({
            events: res
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className='events-container'>
          <h4>What happened</h4>

          <h3><strong>{this.state.country}</strong></h3> 
          <p>
            <i>{this.state.date}</i>
        </p>
            <h4>
{this.state.title}  
            </h4>
            

        </div>
      </React.Fragment>
    )
  }
}

export default Events