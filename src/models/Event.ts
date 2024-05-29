export interface EventData {
  title?: string;
  date?: string;
  time?: string;
  description?: string;
  patient?: {
    name?: string;
    lastname?: string;
  };
}
