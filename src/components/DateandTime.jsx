import React from "react";

class DateDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const { currentDate } = this.state;

    const dayOfWeek = days[currentDate.getDay()];
    const monthName = months[currentDate.getMonth()];
    const date = currentDate.getDate();

    return (
      <div className="flex">
        <p className="text-neutral-800 dark:text-slate-50">
          {dayOfWeek} {monthName} {date}{" "}
        </p>
      </div>
    );
  }
}

export default DateDisplay;
