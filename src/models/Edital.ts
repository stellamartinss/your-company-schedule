export interface TopicNode {
  title: string;
  subtopics: TopicNode[];
}

export interface EditalProps {
  edital: string;
  setEdital: Function;
  setConcursoData: Function;
}

export interface VectoredEditalProps {
  concursoContent: TopicNode[];
  setConcursoData: Function;
}
