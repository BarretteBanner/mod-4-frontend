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
              text: "Event 1",
              start: "2019-10-04",
              end: "2019-10-06",
              backColor: "#cc0000"
            },
            {
              id: 2,
              text: "Event 2",
              start: "2019-10-04",
              end: "2019-10-05",
              backColor: "#e69138"
            },
            {
              id: 3,
              text: "Event 3",
              start: "2019-10-04",
              end: "2019-10-04",
              backColor: "#3c78d8"
            },
            {
              id: 4,
              text: "Event 4",
              start: "2019-10-11",
              end: "2019-10-11"
            },
            {
              id: 5,
              text: "Event 5",
              start: "2019-10-11",
              end: "2019-10-11"
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
