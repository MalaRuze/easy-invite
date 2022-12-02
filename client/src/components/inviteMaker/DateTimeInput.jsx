import React from "react";
import { ConfigProvider, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";

function DateTimeInput(props) {
  const hourFormat = "HH:mm";
  const dateFormat = "DD/MM/YYYY";
  const defaultDateInput =
    props.name === "start"
      ? props.defaultInput.startDate
      : props.defaultInput.endDate;
  const defaultTimeInput =
    props.name === "start"
      ? props.defaultInput.startTime
      : props.defaultInput.endTime;

  function handleChange(datetime, datetimeString) {
    const name =
      datetimeString.length > 5 ? props.name + "Date" : props.name + "Time";
    const datetimeData = [
      {
        target: {
          name: name,
          value: datetimeString,
        },
      },
    ];
    props.handleChange(datetimeData);
  }

  return (
    <div className="grid grid-cols-3 pt-5">
      <div className="col-span-2">
        <p className="pb-2">{props.inputName} Date </p>
        <DatePicker
          className="w-11/12"
          showToday={false}
          value={dayjs(defaultDateInput, dateFormat)}
          format={dateFormat}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="pb-2">{props.inputName} Time</p>
        <ConfigProvider
          theme={{
            token: {
              colorTextLightSolid: "#7743DB",
            },
          }}
        >
          <TimePicker
            className="w-full"
            showNow={false}
            defaultValue={dayjs(defaultTimeInput, hourFormat)}
            format={hourFormat}
            onChange={handleChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

export default DateTimeInput;
