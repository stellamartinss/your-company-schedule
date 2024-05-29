import React, { useState } from 'react';
import '../Calendar.css';
import { Button } from 'primereact/button';
import EventDialog from '../../EventDialog/EventDialog';
import { EventData } from '../../../models/Event';
import { daysOfWeek } from '../../../common/utils';
import CalendarEvent from '../../event/CalendarEvent';
import { CalendarProps } from '../../../models/Calendar';

const generateRandomEvents = (
  year: number,
  month: number,
  count: number
): EventData[] => {
  const events: EventData[] = [];
  for (let i = 0; i < count; i++) {
    const day =
      Math.floor(Math.random() * new Date(year, month + 1, 0).getDate()) + 1;
    events.push({
      date: new Date(year, month, day),
      title: `Event ${i + 1}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }
  return events;
};

const MonthCalendar: React.FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<EventData[]>(
    generateRandomEvents(currentDate.getFullYear(), currentDate.getMonth(), 5)
  );
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState<EventData>({});

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
    setEvents(
      generateRandomEvents(newDate.getFullYear(), newDate.getMonth(), 5)
    );
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
    setEvents(
      generateRandomEvents(newDate.getFullYear(), newDate.getMonth(), 5)
    );
  };

  const handleEvent = (event: EventData) => {
    setEventData(event);
    setVisible(true);
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
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
                  {getEventsForDate(date).map((event, index) => (
                    <CalendarEvent event={event} handleEvent={handleEvent} />
                  ))}
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
