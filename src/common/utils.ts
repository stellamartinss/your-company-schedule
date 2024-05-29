export const yearMonths = {
  pt: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
};

export const daysOfWeek = {
  pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
};

export const formattedDays = (day: number) => (day < 10 ? `0${day}` : day);

export const generateDate = (date: Date | undefined) => {
  if (!date) return 'Data inválida';

  const month = yearMonths['pt'][date.getMonth()];
  const day = formattedDays(date.getDate());
  return `${day} de ${month} de ${date.getFullYear()}`;
};
