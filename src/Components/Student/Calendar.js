import React, { Component } from 'react'
import {DayPilot, DayPilotMonth} from "daypilot-pro-react";
import "../../css/Calendar.css";
export class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: DayPilot.Date.today(),
          eventEndSpec: "Date",
          eventHeight: 30,
          headerHeight: 30,
          cellMarginBottom: 10,
          cellHeaderHeight: 20,
          eventMarginBottom: 5
        };
      }
    
      componentDidMount() {
        // load event data
        this.setState({
          events: [
            {
              id: 1,
              text: "Test Today!",
              start: "2019-10-04",
              end: "2019-10-04",
              backColor: "#cc0000"
            },
            {
              id: 2,
              text: "Staring Labs",
              start: "2019-10-08",
              end: "2019-10-08",
              backColor: "#e69138"
            },
            {
              id: 3,
              text: "Pizza Party",
              start: "2019-10-12",
              end: "2019-10-12",
              backColor: "#3c78d8"
            },
            {
              id: 4,
              text: "Presentation Today!",
              start: "2019-10-24",
              end: "2019-10-24",
              backColor: "#3c78d8"
            },
            {
              id: 5,
              text: "Final",
              start: "2019-10-31",
              end: "2019-10-31",
              backColor: "#cc0000"
            },
          ]
        });
    
      }

    
      render() {
        var {...config} = this.state;
        return (
          <div>
            <DayPilotMonth
              {...config}
              ref={component => {
                this.calendar = component && component.control;
              }}
            />
          </div>
        );
      }
}

export default Calendar
