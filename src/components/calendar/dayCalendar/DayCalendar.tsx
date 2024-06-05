import React, { useState } from 'react';
import { EventData } from '../../../models/Event';
import CalendarEvent from '../../event/CalendarEvent';
import EventDialog from '../../EventDialog/EventDialog';
import { CalendarMode, CalendarProps } from '../../../models/Calendar';
import CalendarHeader from '../calendarHeader/CalendarHeader';

const DayCalendar: React.FC<CalendarProps> = ({ activities }: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [eventData, setEventData] = useState<EventData>();

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

  const handleEvent = (event: EventData) => {
    setEventData(event);
    setVisible(true);
  };

  const renderEventsForHour = (hour: number) => {
    const hourEvents = activities.filter((activity: EventData) => {
      const eventDate = new Date(activity.date);

      const eventDateNoTime = Date.UTC(
        eventDate.getUTCFullYear(),
        eventDate.getUTCMonth(),
        eventDate.getUTCDate()
      );
      const currentDateNoTime = Date.UTC(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth(),
        currentDate.getUTCDate()
      );

      return (
        currentDateNoTime === eventDateNoTime &&
        eventDate.getUTCHours() === hour
      );
    });
    return hourEvents.map((event: EventData, index: any) => (
      <CalendarEvent activity={event} key={index} handleEvent={handleEvent} />
    ));
  };

  return (
    <>
      <EventDialog data={eventData} visible={visible} setVisible={setVisible} />
      <div className='calendar'>
        <CalendarHeader
          currentDate={currentDate}
          handlePrev={previousDay}
          handleNext={nextDay}
          mode={CalendarMode.DAY}
        />
        {hours.map((hour) => (
          <div key={hour} className='hour'>
            <div className='time'>{`${hour}:00`}</div>
            <div className='events'>{renderEventsForHour(hour)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DayCalendar;
