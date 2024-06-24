import React from 'react';
import { Menubar } from 'primereact/menubar';

const Header: React.FC = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'Agenda',
      icon: 'pi pi-star',
      url: '/calendar'
    },
    {
      label: 'Novo Concurso',
      icon: 'pi pi-plus',
      url: '/create'
    }
  ];

  return <Menubar model={items} />;
};

export default Header;
