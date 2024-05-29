import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { EventData } from '../../../models/Event';
import { generateDate } from '../../../common/utils';
import CalendarEvent from '../../event/CalendarEvent';
import EventDialog from '../../EventDialog/EventDialog';
import { CalendarProps } from '../../../models/Calendar';

interface Day {
  date: string;
  events?: EventData[];
}

const WeekCalendar: React.FC<CalendarProps> = ({ events })  => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState<EventData>({});

  const getWeekDays = (date: Date): Day[] => {
    const currentDayIndex = date.getDay();
    const currentWeek = [];

    for (let i = 0; i < 7; i++) {
      const dateNum = date.getDate() - currentDayIndex + i;

      const events: EventData[] = generateRandomEvents(
        date.getFullYear(),
        date.getMonth(),
        dateNum
      );

      const finalDate = generateDate(date);
      currentWeek.push({ date: finalDate, events });
    }

    return currentWeek;
  };

  const generateRandomEvents = (
    year: number,
    month: number,
    date: number
  ): EventData[] => {
    const numEvents = Math.floor(Math.random() * 3);
    const events: EventData[] = [];
    for (let i = 0; i < numEvents; i++) {
      const eventDate = new Date(year, month, date, 10 + i, 0);
      events.push({
        title: `Event ${i + 1}`,
        date: eventDate,
        description: `Description for event ${i + 1}`,
        patient: {
          name: `Patient ${i + 1}`,
          lastname: `Lastname ${i + 1}`,
        },
      });
    }
    return events;
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
              <div>{day.date}</div>
              {day.events &&
                day.events.map((event, eventIndex) => (
                  <CalendarEvent event={event} handleEvent={handleEvent} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekCalendar;
