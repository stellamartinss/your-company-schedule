import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { VectoredEditalProps } from '../../models/Edital';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Edital = ({ concursoContent }: VectoredEditalProps) => {
  const [value, setValue] = useState<string>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <div className='card m-2'>
      {concursoContent && concursoContent.length > 0 ? (
        <>
          <div className='text-right mb-3'>
            <Button
              onClick={() => setIsEditMode(!isEditMode)}
              severity='secondary'
              outlined
              text
            >
              Editar <i className='pi pi-pencil'></i>
            </Button>
          </div>
          <Accordion activeIndex={0}>
            {concursoContent &&
              concursoContent.map((item) => (
                <AccordionTab
                  header={
                    <>
                      {isEditMode ? (
                        <InputText value={item.title}></InputText>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </>
                  }
                >
                  {item.subtopics.map((subtopic) => (
                    <Panel
                      header={
                        <>
                          {isEditMode ? (
                            <InputText
                              value={subtopic.title}
                              style={{ width: '' }}
                            ></InputText>
                          ) : (
                            <span>{subtopic.title}</span>
                          )}
                        </>
                      }
                      toggleable
                    >
                      {subtopic.subtopics.map((sub) => (
                        <div className='flex align-items-center gap-3'>
                          <span className='flex align-items-center gap-2'>
                            <>
                              {isEditMode ? (
                                <InputText value={sub.title}></InputText>
                              ) : (
                                <span className=''>- {sub.title}</span>
                              )}
                            </>
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
        </>
      ) : (
        <div className='text-center mt-5'>
          <small>Adicione o edital verticalizado pare visualizar </small>
        </div>
      )}
    </div>
  );
};

export default Edital;
