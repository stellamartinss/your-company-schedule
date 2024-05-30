import React from 'react';
import { EventData } from '../../models/Event';
import "./CalendarEvent.css"

const CalendarEvent = ({
  activity,
  handleEvent,
}: {
  activity: EventData;
  handleEvent: Function;
}) => {
  return (
    <div className='event' onClick={() => handleEvent(activity)}>
      {activity?.title}
    </div>
  );
};

export default CalendarEvent;
