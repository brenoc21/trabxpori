export function getCurrentDate(separator) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let weekday = newDate.getDay() + 1;
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
    console.log("hour:", hour)
  return `${date}${separator}${
    month < 10 ? `${getMonthName(month)}` : `${month}`
  }${separator}${year}${separator}${getWeekday(weekday)}${separator}${hour}:${minutes}:${seconds}`;
}
function getMonthName(month) {
  switch (month) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}
function getWeekday(weekday) {
  switch (weekday) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}
