export interface TopicNode {
  title: string;
  subtopics: TopicNode[];
}

export interface EditalProps {
  edital: string;
  setEdital: Function;
  setVectoredEdital: Function;
}

export interface VectoredEditalProps {
    vectoredEdital: TopicNode[];
    setVectoredEdital: Function;
  }
  