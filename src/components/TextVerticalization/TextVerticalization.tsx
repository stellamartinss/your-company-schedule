import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import React from 'react';
import { EditalProps, TopicNode } from '../../models/Edital';

const TextVerticalization = ({
  edital,
  setEdital,
  setConcursoData,
}: EditalProps) => {
  const handleEditalBreaking = () => {
    const lines = edital
      .trim()
      .split('\n')
      .filter((item) => item !== '');
    const stack: TopicNode[] = [];
    let currentLevel = 0;

    const final: any = [];

    for (const line of lines) {
      const trimmedLine = line.trim();
      const level = line.match(/^\s*/)![0].length / 3 + 1;
      const title = trimmedLine.replace(/^\d+(\.\d+)*\s+/, '');

      const node: TopicNode = { title, subtopics: [] };

      if (level > currentLevel) {
        if (stack.length > 0) {
          stack[stack.length - 1].subtopics.push(node);
        }
      } else if (level === currentLevel) {
        if (stack.length > 1) {
          stack[stack.length - 2].subtopics.push(node);
          stack.pop();
        } else if (stack.length === 1) {
          stack[0].subtopics.push(node);
        }
      } else {
        while (stack.length >= level) {
          stack.pop();
        }
        if (stack.length > 0) {
          stack[stack.length - 1].subtopics.push(node);
        }
      }

      if (level === 1) {
        final.push(node);
      }
      stack.push(node);
      currentLevel = level;
    }

    setConcursoData((prev: any) => ({ ...prev, content: final }));
  };

  return (
    <div className=' m-2'>
      <div>
        <div className='flex flex-wrap gap-3 p-fluid'>
          <div>
            <h3>Insira abaixo o conteúdo do edital verticalizado</h3>
          </div>
          <div className='ml-auto mr-2'>
            <Button
              onClick={() => handleEditalBreaking()}
              size='small'
              icon='pi pi-play '
              label='Executar'
              className='mt-3'
            />
          </div>
        </div>
      </div>
      <InputTextarea
        value={edital}
        style={{ width: '100%', height: 'fit-content' }}
        onChange={(e) => {
          setEdital(e.target.value);
        }}
        rows={100}
        cols={100}
      />
    </div>
  );
};

export default TextVerticalization;
