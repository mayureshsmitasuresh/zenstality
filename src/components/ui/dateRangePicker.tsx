// components/DateRangePicker.tsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (startDate: Date | null, endDate: Date | null) => void;
  minDate?: Date; // Add minDate prop
  maxDate?: Date; // Add maxDate prop
}

export const DateRangePicker = ({
  startDate,
  endDate,
  onChange,
  minDate,
  maxDate,
}: DateRangePickerProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div>
        <label className=" text-sm font-medium mb-1">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => onChange(date, endDate)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={minDate} // Restrict start date to minDate
          maxDate={maxDate} // Restrict start date to maxDate
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label className=" text-sm font-medium mb-1">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => onChange(startDate, date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={minDate} // Restrict end date to minDate
          maxDate={maxDate} // Restrict end date to maxDate
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};