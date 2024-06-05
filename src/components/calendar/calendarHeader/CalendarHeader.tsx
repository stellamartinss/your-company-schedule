import { Button } from 'primereact/button';
import React from 'react';
import { CalendarMode } from '../../../models/Calendar';
import { generateDate, yearMonths } from '../../../common/utils';

export interface CalendarHeaderProps {
  currentDate: Date;
  handlePrev: () => any;
  handleNext: () => any;
  mode: string;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  handlePrev,
  handleNext,
  mode,
}: {
  currentDate: Date;
  handlePrev: () => {};
  handleNext: () => {};
  mode: string;
}) => {

  const chooseMode = () => {
    switch (mode) {
      case CalendarMode.MONTH:
        return `${
          yearMonths['pt'][currentDate.getMonth()]
        } ${currentDate.getFullYear()}`;
      default:
        return `${generateDate(currentDate)}`;
    }
  };

  return (
    <div className='header justify-content-end'>
      <p className='date-text mr-3'>{chooseMode()}</p>
      <Button className='mr-3' onClick={handlePrev}>{`<`}</Button>
      <Button onClick={handleNext}>{`>`}</Button>
    </div>
  );
};

export default CalendarHeader;
