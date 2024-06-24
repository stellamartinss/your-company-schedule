import { TopicNode } from './Edital';

export interface Concurso {
  name?: string;
  board?: string;
  date?: Date | null | undefined;
  content?: TopicNode[] | [];
}
