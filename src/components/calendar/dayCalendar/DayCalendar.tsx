import React, { useState } from 'react';
import { EventData } from '../../../models/Event';
import { Button } from 'primereact/button';

interface CalendarProps {
  events: EventData[];
}

const DayCalendar: React.FC<CalendarProps> = ({ events }: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const previousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const generateRandomEvents = () => {
    const randomEvents: EventData[] = [];
    const hoursOfDay = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    hoursOfDay.forEach((time) => {
      const randomIndex = Math.floor(Math.random() * events.length);
      randomEvents.push({
        time,
        description: events[randomIndex]?.description,
      });
    });
    return randomEvents;
  };

  const dailyEvents = generateRandomEvents();

  const renderEventsForHour = (hour: number) => {
    const hourEvents = dailyEvents.filter(
      (event) => event.time === `${hour}:00`
    );
    return hourEvents.map((event, index) => (
      <div key={index} className='event'>
        {event?.description}
      </div>
    ));
  };

  return (
    <div className='calendar'>
      <div className='header'>
        <Button onClick={previousDay}>Previous</Button>
        <h2>{currentDate.toDateString()}</h2>
        <Button onClick={nextDay}>Next</Button>
      </div>
      {hours.map((hour) => (
        <div key={hour} className='hour'>
          <div className='time'>{`${hour}:00`}</div>
          <div className='events'>{renderEventsForHour(hour)}</div>
        </div>
      ))}
    </div>
  );
};

export default DayCalendar;
