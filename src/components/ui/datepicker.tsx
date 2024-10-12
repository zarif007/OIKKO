"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  dateKey: string;
  handleDateChange: (dateKey: string, date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  dateKey,
  handleDateChange,
}) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    console.log(dateKey);
    if (date) handleDateChange(dateKey, date);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full">
        <Calendar
          className=" bg-black"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
