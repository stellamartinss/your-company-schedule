import React, { useState } from 'react';
import MonthCalendar from '../../components/calendar/monthCalendar/MonthCalendar';
import WeekCalendar from '../../components/calendar/weekCalendar/WeekCalendar';
import { Button } from 'primereact/button';
import { CalendarMode } from '../../models/Calendar';
import { useTranslation } from 'react-i18next';
import DayCalendar from '../../components/calendar/dayCalendar/DayCalendar';
import { EventData } from '../../models/Event';
import { ButtonGroup } from 'primereact/buttongroup';

const Agenda = () => {
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.MONTH);
  const { t } = useTranslation();

  const activities: EventData[] = [
    {
      title: 'Implemented fresh-thinking artificial intelligence',
      date: '2024-06-05T01:51:13.000Z',
      time: '01:51',
      description: 'Production action gun large.',
      patient: {
        name: 'Jaime',
        lastname: 'Bridges',
      },
    },
    {
      title: 'Implemented fresh-thinking artificial intelligence',
      date: '2024-05-29T01:51:13.000Z',
      time: '01:51',
      description: 'Production action gun large.',
      patient: {
        name: 'Jaime',
        lastname: 'Bridges',
      },
    },
    {
      title: 'Up-sized real-time project',
      date: '2024-05-30T19:46:01.000Z',
      time: '19:46',
      description: 'Onto list job individual particularly.',
      patient: {
        name: 'Tony',
        lastname: 'Moreno',
      },
    },
    {
      title: 'Visionary uniform secured line',
      date: '2024-05-30T20:26:29.000Z',
      time: '20:26',
      description: 'Than first mouth arm effect actually.',
      patient: {
        name: 'Daniel',
        lastname: 'Vance',
      },
    },
    {
      title: 'Visionary uniform secured line',
      date: '2024-05-31T20:26:29.000Z',
      time: '20:26',
      description: 'Than first mouth arm effect actually.',
      patient: {
        name: 'Daniel',
        lastname: 'Vance',
      },
    },
    {
      title: 'Persistent attitude-oriented middleware',
      date: '2024-05-30T01:49:04.000Z',
      time: '01:49',
      description: 'Product power specific take behind choose.',
      patient: {
        name: 'Daniel',
        lastname: 'Baker',
      },
    },
    {
      title: 'User-centric impactful database',
      date: '2024-05-30T03:02:17.000Z',
      time: '03:02',
      description: 'Rich send visit capital long several.',
      patient: {
        name: 'Jeffrey',
        lastname: 'Hernandez',
      },
    },
    {
      title: 'Advanced static infrastructure',
      date: '2024-05-30T10:54:16.000Z',
      time: '10:54',
      description: 'Explain many him prevent child value.',
      patient: {
        name: 'Patricia',
        lastname: 'Anderson',
      },
    },
    {
      title: 'Optimized cohesive structure',
      date: '2024-05-30T16:16:23.000Z',
      time: '16:16',
      description: 'Receive either discuss our.',
      patient: {
        name: 'Jill',
        lastname: 'Thompson',
      },
    },
    {
      title: 'Optimized cohesive structure',
      date: '2024-06-02T16:16:23.000Z',
      time: '16:16',
      description: 'Receive either discuss our.',
      patient: {
        name: 'Jill',
        lastname: 'Thompson',
      },
    },
    {
      title: 'Centralized methodical matrices',
      date: '2024-05-30T17:38:09.000Z',
      time: '17:38',
      description: 'Build economy of fear finish study again.',
      patient: {
        name: 'John',
        lastname: 'Sampson',
      },
    },
    {
      title: 'Versatile asynchronous migration',
      date: '2024-05-30T03:44:28.000Z',
      time: '03:44',
      description: 'Small tough important pass.',
      patient: {
        name: 'Curtis',
        lastname: 'Diaz',
      },
    },
    {
      title: 'De-engineered eco-centric customer loyalty',
      date: '2024-05-30T19:35:17.000Z',
      time: '19:35',
      description: 'Six enough control above view rule.',
      patient: {
        name: 'Christopher',
        lastname: 'Nguyen',
      },
    },
  ];

  const chooseCalendarType = (type: string) => {
    switch (type) {
      case CalendarMode.MONTH:
        return <MonthCalendar activities={activities} />;
      case CalendarMode.WEEK:
        return <WeekCalendar activities={activities} />;
      case CalendarMode.DAY:
        return <DayCalendar activities={activities} />;
    }
  };

  const handleSetMode = (selectedMode: CalendarMode) => {
    setMode(selectedMode);
  };

  return (
    <div>
      <div className='text-center mt-3'>
        <ButtonGroup>
          <Button
            label={`${t(`language.DAY`)}`}
            aria-selected={true}
            onClick={() => handleSetMode(CalendarMode.DAY)}
            outlined={mode === CalendarMode.DAY}
          />
          <Button
            label={`${t(`language.WEEK`)}`}
            onClick={() => handleSetMode(CalendarMode.WEEK)}
            outlined={mode === CalendarMode.WEEK}
          />
          <Button
            label={`${t(`language.MONTH`)}`}
            onClick={() => handleSetMode(CalendarMode.MONTH)}
            outlined={mode === CalendarMode.MONTH}
          />
        </ButtonGroup>
      </div>

      {chooseCalendarType(mode)}
    </div>
  );
};

export default Agenda;
