export const calculateTimePassed = (dateString: string) => {
  let date = Date.parse(dateString);

  const currentDate = new Date();

  let currentDateTime = currentDate.getTime();

  let timePassed = currentDateTime - date;

  let msToSeconds = Math.floor(timePassed / 1000);

  let msToMinutes = Math.floor(timePassed / 60000);

  let msToHour = Math.floor(timePassed / 3600000);

  let msToDay = Math.floor(timePassed / 86400000);

  let msToMonth = Math.floor(timePassed / 2629800000);

  let msToYear = Math.floor(timePassed / 31536000000);

  if (timePassed > 31536000000) {
    if (msToYear === 1) {
      return `há ${msToYear} ano`;
    } else {
      return `há ${msToYear} anos`;
    }
  } else if (timePassed > 2629800000) {
    if (msToMonth === 1) {
      return `há ${msToMonth} mês`;
    } else {
      return `há ${msToMonth} meses`;
    }
  } else if (timePassed > 86400000) {
    if (msToDay === 1) {
      return `há ${msToDay} dia`;
    } else {
      return `há ${msToDay} dias`;
    }
  } else if (timePassed > 3600000) {
    if (msToHour === 1) {
      return `há ${msToHour} hora`;
    } else {
      return `há ${msToHour} horas`;
    }
  } else if (timePassed > 60000) {
    if (msToMinutes === 1) {
      return `há ${msToMinutes} minuto`;
    } else {
      return `há ${msToMinutes} minutos`;
    }
  } else {
    if (msToSeconds === 1) {
      return `há ${msToSeconds} segundo`;
    } else {
      return `há ${msToSeconds} segundos`;
    }
  }
};
