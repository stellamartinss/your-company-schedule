import React, { useState } from 'react';
import '../Calendar.css';
import { Button } from 'primereact/button';
import EventDialog from '../../EventDialog/EventDialog';
import { EventData } from '../../../models/Event';
import { daysOfWeek } from '../../../common/utils';
import { CalendarProps } from '../../../models/Calendar';
import CalendarEvent from '../../event/CalendarEvent';

const MonthCalendar: React.FC<CalendarProps> = ({ activities }: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState<EventData>();

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();

  const daysInMonth = Array.from(
    { length: endOfMonth.getDate() },
    (_, i) => new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1)
  );

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
  };

  const handleEvent = (activity: EventData) => {
    setEventData(activity);
    setVisible(true);
  };

  const getEventsForDate = (date: Date) => {
    const dateEvents = activities.filter((activity: EventData) => {
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

      return eventDateNoTime === currentDateNoTime;
    });

    return dateEvents.map((activity: EventData, index: number) => (
      <CalendarEvent activity={activity} handleEvent={handleEvent} />
    ));
  };

  return (
    <>
      <EventDialog data={eventData} visible={visible} setVisible={setVisible} />
      <div className='calendar'>
        <div className='header'>
          <Button onClick={handlePrevMonth}>Previous</Button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h2>
          <Button onClick={handleNextMonth}>Next</Button>
        </div>
        <div className='body'>
          <div className='days-of-week'>
            {daysOfWeek['pt'].map((day) => (
              <div key={day} className='week-day-name'>
                {day}
              </div>
            ))}
          </div>
          <div className='days'>
            {Array.from({ length: startDay }).map((_, index) => (
              <div key={index} className='empty-day'></div>
            ))}
            {daysInMonth.map((date) => (
              <div key={date.getDate()} className='day'>
                <span>{date.getDate()}</span>
                <div className='events'>
                  {getEventsForDate(date)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthCalendar;
