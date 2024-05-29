export enum CalendarMode {
  MONTH = 'MONTH',
  DAY = 'DAY',
  WEEK = 'WEEK',
}

export interface CalendarProps {
  events: Event[];
}