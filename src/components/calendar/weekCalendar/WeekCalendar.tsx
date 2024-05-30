import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { EventData } from '../../../models/Event';
import { generateDate } from '../../../common/utils';
import CalendarEvent from '../../event/CalendarEvent';
import EventDialog from '../../EventDialog/EventDialog';
import { CalendarProps } from '../../../models/Calendar';

interface Day {
  dateString: string;
  date: Date;
  activities?: EventData[];
}

const WeekCalendar: React.FC<CalendarProps> = ({ activities }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState<EventData>();

  const getWeekDays = (date: Date): Day[] => {
    const currentDayIndex = date.getDay();
    const currentWeek = [];

    for (let i = 0; i < 7; i++) {
      const dateNum = date.getDate() - currentDayIndex + i;
      const newDate = new Date(date.getFullYear(), date.getMonth(), dateNum);

      const dateString = generateDate(newDate);
      currentWeek.push({ dateString: dateString, date: newDate });
    }

    return currentWeek;
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const handlePreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentDate(previousWeek);
  };

  const weekDays = getWeekDays(currentDate);

  const handleEvent = (event: EventData) => {
    setEventData(event);
    setVisible(true);
  };

  const renderEventsForWeek = (date: any) => {
    const hourEvents = activities.filter((activity: EventData) => {
      const eventDate = new Date(activity.date);

      const eventDateNoTime = Date.UTC(
        eventDate.getUTCFullYear(),
        eventDate.getUTCMonth(),
        eventDate.getUTCDate()
      );
      const currentDateNoTime = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
      );

      return currentDateNoTime === eventDateNoTime;
    });

    return hourEvents.map((event: EventData, index: any) => (
      <CalendarEvent activity={event} key={index} handleEvent={handleEvent} />
    ));
  };

  return (
    <>
      <EventDialog data={eventData} visible={visible} setVisible={setVisible} />
      <div className='calendar'>
        <div className='header'>
          <Button onClick={handlePreviousWeek}>Previous</Button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h2>
          <Button onClick={handleNextWeek}>Next</Button>
        </div>
        <div className='week'>
          {weekDays.map((day, index) => (
            <div key={index} className='day'>
              <div>{day.dateString}</div>
              {renderEventsForWeek(day.date)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekCalendar;
