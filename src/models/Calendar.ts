import { EventData } from './Event';

export enum CalendarMode {
  MONTH = 'MONTH',
  DAY = 'DAY',
  WEEK = 'WEEK',
}

export interface CalendarProps {
  activities: EventData[];
}
