import React from 'react';
import ReactDOM from 'react-dom';
import { Interval } from './Interval'
import { convertIntervalToTime } from '../functions/convertIntervalToTime'

class Calculator extends React.Component {
  state = {
    intervals: [
      {
        id: 1,
        days: 0,
        fullHours: 8,
        hours: 8,
        minutes: 30
      },
      {
        id: 2,
        days: 0,
        fullHours: 8,
        hours: 8,
        minutes: 30
      }
    ],
    lastIntervalID: 2,
    totalInterval: {
      days: 0,
      fullHours: 17,
      hours: 17,
      minutes: 0,
    }
  }

  updateIntervals = (intervalID, newIntervalObject) => {
    // Create the new intervals array that will replace this.state.invervals
    let newIntervalsArray = this.state.intervals.map((current) => {
      if (current.id === intervalID) {
        return newIntervalObject
      } else {
        return current
      }
    })

    // Create the new interval object that will replace this.state.totalInterval
    let newDays = 0
    let newFullHours = 0
    let newHours = 0
    let newMinutes = 0
    newIntervalsArray.forEach((current) => {
      newDays += current.days
      newFullHours += current.fullHours
      newHours += current.hours
      newMinutes += current.minutes
    })
    if (newMinutes >= 60) {
      let remainderHours = Math.floor(newMinutes / 60)
      let remainderMinutes = newMinutes % 60
      newHours += remainderHours
      newMinutes = remainderMinutes
      newFullHours += remainderHours
    }
    if (newHours >= 24) {
      let remainderDays = Math.floor(newHours / 24)
      let remainderHours = newHours % 24
      newHours = remainderHours
      newDays += remainderDays
    }
    let newIntervalState = {
      days: newDays,
      fullHours: newFullHours,
      hours: newHours,
      minutes: newMinutes
    }

    // Set the new intervals array and enw interval object
    this.setState(() => {
      return {
        intervals: newIntervalsArray,
        totalInterval: newIntervalState
      }
    })
  }

  addInterval = () => {

  }

  removeInterval = () => {
    
  }

  render() {
    return (
      <div className="calculator">

        <div className="calculator__headings">
          <div className="calculator__headings__heading calculator__headings__start">Start Time</div>
          <div className="calculator__headings__heading calculator__headings__end">End Time</div>
          <div className="calculator__headings__heading calculator__headings__total">Interval</div> 
        </div>

        {this.state.intervals.map((current, index) => {
          return <Interval key={index} intervalObject={current} updateIntervals={this.updateIntervals}/>  
        })}

        <div className="calculator__totals">
          
          <div className="button-container">
            <div className="calculator__totals__button button-add"><ion-icon name="add-circle"></ion-icon>Add interval</div>
          </div>
          <div className="button-container">
            <div className="calculator__totals__button button-remove"><ion-icon name="remove-circle"></ion-icon>Remove interval</div>
          </div>
  
          <div className="total">
            <div className="total__days">
              <span className="total__time-display">{this.state.totalInterval.days}</span><span className="total__unit-display">d</span>
              <span className="total__time-display">{this.state.totalInterval.hours}</span><span className="total__unit-display">h</span>
              <span className="total__time-display">{this.state.totalInterval.minutes}</span><span className="total__unit-display">m</span>
            </div>
            <div className="total__hours">
              <span className="total__time-display">{this.state.totalInterval.fullHours}</span><span className="total__unit-display">h</span>
              <span className="total__time-display">{this.state.totalInterval.minutes}</span><span className="total__unit-display">m</span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export { Calculator }