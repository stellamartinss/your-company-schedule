import { Dialog } from 'primereact/dialog';
import React from 'react';
import { EventData } from '../../models/Event';
import { generateDate } from '../../common/utils';

const EventDialog = ({
  data,
  visible,
  setVisible,
}: {
  data: EventData;
  visible: boolean;
  setVisible: Function;
}) => {
  const formattedDate = generateDate(data?.date);

  return (
    <Dialog
      header={data.title}
      visible={visible}
      style={{ width: '50vw' }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <p>
        <strong>{formattedDate}</strong>
      </p>
      <p className='m-0'>{data.description?.toString()}</p>
    </Dialog>
  );
};

export default EventDialog;
