import React from 'react';
import ReactDOM from 'react-dom';
import { convertIntervalToTime } from '../functions/convertIntervalToTime'

class Interval extends React.Component {
  state = {
    id: this.props.intervalObject.id,
    days: this.props.intervalObject.days,
    fullHours: this.props.intervalObject.fullHours,
    hours: this.props.intervalObject.hours,
    minutes: this.props.intervalObject.minutes
  }

  endDateRef = React.createRef();
  endHoursRef = React.createRef();
  endMinutesRef = React.createRef();
  endAMorPMRef = React.createRef();
  startDateRef = React.createRef();
  startHoursRef = React.createRef();
  startMinutesRef = React.createRef();
  startAMorPMRef = React.createRef();
  
  defaultDate = (() => {
    let today = new Date();
    let year = today.getFullYear() 
    let month = today.getMonth() + 1
    let monthSplitter = month >= 10 ? "-" : "-0"
    let date= today.getDate();
    let dateSplitter = date >= 10 ? "-" : "-0" 
    let defaultDate =`${year}${monthSplitter}${month}${dateSplitter}${date}`
    return defaultDate
  })();

  updateInterval = () => {
    // Get the value from all the end drop downs
    let endDate = this.endDateRef.current.value
    let endHours = this.endHoursRef.current.value
    let endMinutes = this.endMinutesRef.current.value
    let endAMOrPM = this.endAMorPMRef.current.value
    if (endAMOrPM === "PM") {
      if(endHours === "12") {
        endHours = endHours
      } else {
        endHours = parseInt(endHours, 10) + 12
      }
    } else {
      if(endHours === "12") {
        endHours = parseInt(endHours, 10) - 12
      } else {
        endHours = endHours
      }
    }

    // Get the value from all the start drop downs
    let startDate = this.startDateRef.current.value
    let startHours = this.startHoursRef.current.value
    let startMinutes = this.startMinutesRef.current.value
    let startAMOrPM = this.startAMorPMRef.current.value
    if (startAMOrPM === "PM") {
      if(endHours === "12") {
        startHours = startHours
      } else {
        startHours = parseInt(startHours, 10) + 12
      }
    } else {
      if(startHours === "12") {
        startHours = parseInt(startHours, 10) - 12
      } else {
        startHours = startHours
      }
    }
    
    let endDateAndTimeInMS = (new Date(`${endDate} ${endHours}:${endMinutes}:00`)).getTime();
    let startDateAndTimeInMS = (new Date(`${startDate} ${startHours}:${startMinutes}:00`)).getTime();
    let newInterval = endDateAndTimeInMS - startDateAndTimeInMS

    let newIntervalObject = convertIntervalToTime(newInterval, this.state.id)

    this.props.updateIntervals(this.state.id, newIntervalObject)
  }

  // Update state when the incomeing prop changes
  componentWillReceiveProps(nextProps) {
    if (nextProps.intervalObject.days !== this.state.days || nextProps.intervalObject.fullHours !== this.state.fullHours || nextProps.intervalObject.hours !== this.state.hours || nextProps.intervalObject.minutes !== this.state.minutes) {
      this.setState(() => {
        return {
          days: nextProps.intervalObject.days,
          fullHours: nextProps.intervalObject.fullHours,
          hours: nextProps.intervalObject.hours,
          minutes: nextProps.intervalObject.minutes
        }
      });
    }
  }

  render() {
    return (
      <div className="interval">
        
        <div className="interval__start">
          <div className="interval__top-section">
            <input type="date" className="interval__start__date date-selector" defaultValue={this.defaultDate} ref={this.startDateRef} onChange={this.updateInterval}/>
          </div>
          <div className="interval__top-section">
            <select className="interval__start__hours time-selector" defaultValue="9" ref={this.startHoursRef} onChange={this.updateInterval}>
              <option value="1" className="select-option">1</option>
              <option value="2" className="select-option">2</option>
              <option value="3" className="select-option">3</option>
              <option value="4" className="select-option">4</option>
              <option value="5" className="select-option">5</option>
              <option value="6" className="select-option">6</option>
              <option value="7" className="select-option">7</option>
              <option value="8" className="select-option">8</option>
              <option value="9" className="select-option">9</option>
              <option value="10" className="select-option">10</option>
              <option value="11" className="select-option">11</option>
              <option value="12" className="select-option">12</option>
            </select>

            <span className="colon">:</span>

             <select className="interval__start__minutes time-selector" defaultValue="00" ref={this.startMinutesRef}>
              <option value="0" className="select-option">00</option>
              <option value="5" className="select-option">05</option>
              <option value="10" className="select-option">10</option>
              <option value="15" className="select-option">15</option>
              <option value="20" className="select-option">20</option>
              <option value="25" className="select-option">25</option>
              <option value="30" className="select-option">30</option>
              <option value="35" className="select-option">35</option>
              <option value="40" className="select-option">40</option>
              <option value="45" className="select-option">45</option>
              <option value="50" className="select-option">50</option>
              <option value="55" className="select-option">55</option>
            </select>  

            <select className="interval__start__AMPM time-selector" defaultValue="AM" ref={this.startAMorPMRef}>
              <option value="AM" className="select-option">AM</option>
              <option value="PM" className="select-option">PM</option>
            </select> 
          </div>
        </div>       

        <div className="interval__end">
          <div className="interval__top-section">
            <input type="date" className="interval__end__date date-selector" defaultValue={this.defaultDate} ref={this.endDateRef}/>
          </div>
          <div className="interval__bottom-section">
            <select className="interval__end__hours time-selector" defaultValue="5" ref={this.endHoursRef}>
              <option value="1" className="select-option">1</option>
              <option value="2" className="select-option">2</option>
              <option value="3" className="select-option">3</option>
              <option value="4" className="select-option">4</option>
              <option value="5" className="select-option">5</option>
              <option value="6" className="select-option">6</option>
              <option value="7" className="select-option">7</option>
              <option value="8" className="select-option">8</option>
              <option value="9" className="select-option">9</option>
              <option value="10" className="select-option">10</option>
              <option value="11" className="select-option">11</option>
              <option value="12" className="select-option">12</option>
            </select>

            <span className="colon">:</span>

            <select className="interval__end__minutes time-selector" defaultValue="30" ref={this.endMinutesRef}>
              <option value="0" className="select-option">00</option>
              <option value="5" className="select-option">05</option>
              <option value="10" className="select-option">10</option>
              <option value="15" className="select-option">15</option>
              <option value="20" className="select-option">20</option>
              <option value="25" className="select-option">25</option>
              <option value="30" className="select-option">30</option>
              <option value="35" className="select-option">35</option>
              <option value="40" className="select-option">40</option>
              <option value="45" className="select-option">45</option>
              <option value="50" className="select-option">50</option>
              <option value="55" className="select-option">55</option>
            </select>  

            <select className="interval__end__AMPM time-selector" defaultValue="PM" ref={this.endAMorPMRef}>
              <option value="AM" className="select-option">AM</option>
              <option value="PM" className="select-option">PM</option>
            </select> 
          </div>
        </div>

        <div className="interval__result">
          <div className="interval__days">
            <span className="interval__time-display">{this.state.days}</span><span className="interval__unit-display">d</span>
            <span className="interval__time-display">{this.state.hours}</span><span className="interval__unit-display">h</span>
            <span className="interval__time-display">{this.state.minutes}</span><span className="interval__unit-display">m</span>
          </div>
          <div className="interval__hours">
            <span className="interval__time-display">{this.state.fullHours}</span><span className="interval__unit-display">h</span>
            <span className="interval__time-display">{this.state.minutes}</span><span className="interval__unit-display">m</span>
          </div>
        </div>

      </div>
    )
  }

}

export { Interval }