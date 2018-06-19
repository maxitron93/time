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
    lastIntervalID: 2
  }

  updateIntervals = (intervalID, newIntervalObject) => {
    let newIntervalsArray = this.state.intervals.map((current) => {
      if (current.id === intervalID) {
        return newIntervalObject
      } else {
        return current
      }
    })

    this.setState(() => {
      return {
        intervals: newIntervalsArray
      }
    })
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
              <span className="total__time-display"></span><span className="total__unit-display">d</span>
              <span className="total__time-display"></span><span className="total__unit-display">h</span>
              <span className="total__time-display"></span><span className="total__unit-display">m</span>
            </div>
            <div className="total__hours">
              <span className="total__time-display"></span><span className="total__unit-display">h</span>
              <span className="total__time-display"></span><span className="total__unit-display">m</span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export { Calculator }