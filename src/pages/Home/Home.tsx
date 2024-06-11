import React, { useState } from 'react';
import TextVerticalization from '../../components/TextVerticalization/TextVerticalization';
import Edital from '../../components/Edital/Edital';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const Home = () => {
  const [edital, setEdital] = useState<string>('');
  const [vectoredEdital, setVectoredEdital] = useState<[]>([]);

  return (
    <>
      <div>
        <Splitter style={{ height: 'fit-content' }}>
          <SplitterPanel className=''>
            <TextVerticalization
              edital={edital}
              setEdital={setEdital}
              setVectoredEdital={setVectoredEdital}
            />
          </SplitterPanel>
          <SplitterPanel className=''>
            <Edital
              vectoredEdital={vectoredEdital}
              setVectoredEdital={setVectoredEdital}
            />
          </SplitterPanel>
        </Splitter>
      </div>
    </>
  );
};

export default Home;
