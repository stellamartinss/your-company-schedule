import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { VectoredEditalProps } from '../../models/Edital';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Edital = ({ vectoredEdital, setVectoredEdital }: VectoredEditalProps) => {
  const [value, setValue] = useState<string>();

  return (
    <div className='card'>
      <Accordion activeIndex={0}>
        {vectoredEdital &&
          vectoredEdital.map((item) => (
            <AccordionTab header={item.title}>
              {item.subtopics.map((subtopic) => (
                <Panel header={subtopic.title}>
                  {subtopic.subtopics.map((sub) => (
                    <div className='flex align-items-center gap-3'>
                      <span className='flex align-items-center gap-2'>
                        <span className=''>- {sub.title}</span>
                      </span>
                      <InputText
                        value={value}
                        placeholder='Link do caderno de provas aqui'
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Button size='small'>Add</Button>
                    </div>
                  ))}
                </Panel>
              ))}
            </AccordionTab>
          ))}
      </Accordion>
    </div>
  );
};

export default Edital;