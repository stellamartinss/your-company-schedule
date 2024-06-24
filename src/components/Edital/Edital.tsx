import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { VectoredEditalProps } from '../../models/Edital';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './edital.css';

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
                        <InputText
                          value={item.title}
                          className='w-full'
                        ></InputText>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </>
                  }
                >
                  {item.subtopics.map((subtopic) => (
                    <Panel
                      header={
                        <div>
                          {isEditMode ? (
                            <InputText
                              value={subtopic.title}
                              className='w-full'
                            ></InputText>
                          ) : (
                            <span>{subtopic.title}</span>
                          )}
                        </div>
                      }
                      toggleable
                    >
                      {subtopic.subtopics.map((sub) => (
                        <div className='flex flex-nowrap gap-3 mb-3'>
                          <div className='w-full'>
                            {isEditMode ? (
                              <InputText
                                value={sub.title}
                                className='w-full'
                              ></InputText>
                            ) : (
                              <span className=''>- {sub.title}</span>
                            )}
                          </div>
                          <div>
                            <div className='p-inputgroup flex-1'>
                              <InputText placeholder='Link caderno de provas' />
                              <Button
                                icon='pi pi-link'
                                className='p-button-secondary'
                                onChange={(e) => setValue(e.target.value)}
                              />
                            </div>
                          </div>
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
