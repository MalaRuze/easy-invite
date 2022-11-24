import React from "react";
import { ConfigProvider, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";

const hourFormat = "HH:mm";
const dateFormat = "DD/MM/YYYY";

function DateTimeInput(props) {
  return (
    <div className="grid grid-cols-3 pt-5">
      <div className="col-span-2">
        <p className="pb-2">{props.inputName} Date</p>
        <DatePicker
          className="w-11/12"
          showToday={false}
          defaultValue={dayjs("10/02/2023", dateFormat)}
          format={dateFormat}
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
            defaultValue={dayjs("12:00", hourFormat)}
            format={hourFormat}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

export default DateTimeInput;
