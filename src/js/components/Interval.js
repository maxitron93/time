import React from 'react';
import ReactDOM from 'react-dom';
import { convertIntervalToTime } from '../functions/convertIntervalToTime'

class Interval extends React.Component {

  render() {
    return (
      <div className="interval">
        
        <div className="interval__start">
          <div className="interval__top-section">
            <input type="date" className="interval__start__date date-selector"/>
          </div>
          <div className="interval__top-section">
            <select className="interval__start__hours time-selector">
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

             <select className="interval__start__minutes time-selector">
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

            <select className="interval__start__AMPM time-selector">
              <option value="AM" className="select-option">AM</option>
              <option value="PM" className="select-option">PM</option>
            </select> 
          </div>
        </div>       

        <div className="interval__end">
          <div className="interval__top-section">
            <input type="date" className="interval__end__date date-selector"/>
          </div>
          <div className="interval__bottom-section">
            <select className="interval__end__hours time-selector">
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

            <select className="interval__end__minutes time-selector">
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

            <select className="interval__end__AMPM time-selector">
              <option value="AM" className="select-option">AM</option>
              <option value="PM" className="select-option">PM</option>
            </select> 
          </div>
        </div>

        <div className="interval__result">
          <div className="interval__days">
            <span className="interval__time-display"></span><span className="interval__unit-display">d</span>
            <span className="interval__time-display"></span><span className="interval__unit-display">h</span>
            <span className="interval__time-display"></span><span className="interval__unit-display">m</span>
          </div>
          <div className="interval__hours">
            <span className="interval__time-display"></span><span className="interval__unit-display">h</span>
            <span className="interval__time-display"></span><span className="interval__unit-display">m</span>
          </div>
        </div>

      </div>
    )
  }

}

export { Interval }