import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import TextVerticalization from '../../components/TextVerticalization/TextVerticalization';
import Edital from '../../components/Edital/Edital';
import { Concurso } from '../../models/Concurso';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const initialConcurso: Concurso = {
  name: '',
  board: '',
  date: null,
  content: [
    {
      title: '',
      subtopics: [],
    },
  ],
};

const CreatePublicTender = () => {
  const [concursoData, setConcursoData] = useState<Concurso>(initialConcurso);

  const [edital, setEdital] = useState<string>('');

  useEffect(() => {
    console.log(concursoData);
  }, [concursoData]);

  return (
    <div className='m-3'>
      <div className='card flex flex-wrap gap-3 p-fluid'>
        <div>
          <h1>Crie um novo concurso público</h1>
        </div>
        <div className='ml-auto'>
          <Button label='Salvar'></Button>
        </div>
      </div>

      <div className='card flex flex-wrap gap-3 p-fluid'>
        <div className='flex-auto'>
          <label htmlFor='integeronly' className='font-bold block mb-2'>
            Nome do Concurso
          </label>
          <InputText
            value={concursoData?.name}
            onChange={(e) =>
              setConcursoData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className='flex-auto'>
          <label htmlFor='withoutgrouping' className='font-bold block mb-2'>
            Banca
          </label>
          <InputText
            value={concursoData?.board}
            onChange={(e) =>
              setConcursoData((prev) => ({ ...prev, board: e.target.value }))
            }
          />
        </div>
        <div className='flex-auto'>
          <label htmlFor='minmaxfraction' className='font-bold block mb-2'>
            Data
          </label>
          <Calendar
            value={concursoData?.date}
            onChange={(e) =>
              setConcursoData((prev) => ({ ...prev, date: e.value }))
            }
          />
        </div>
      </div>
      <div className='mt-3'>
        <Splitter style={{ height: 'fit-content' }}>
          <SplitterPanel className=''>
            <TextVerticalization
              edital={edital}
              setEdital={setEdital}
              setConcursoData={setConcursoData}
            />
          </SplitterPanel>
          <SplitterPanel className=''>
            <Edital
              concursoContent={concursoData.content}
              setConcursoData={setConcursoData}
            />
          </SplitterPanel>
        </Splitter>
      </div>
    </div>
  );
};

export default CreatePublicTender;
