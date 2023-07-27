// пробуем добавить функционал с записью "кол-во минут назад". Взято из https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function formatedDate(date) {
  const dt = new Date();
  let dayOfMonth = dt.getDate();
  let month = dt.getMonth() + 1;
  let year = dt.getFullYear();
  let hour = dt.getHours();
  let minutes = dt.getMinutes();
  let diffMs = new Date() - dt;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "только что";
  } else if (diffMin < 1) {
    return `${diffSec} секунд назад`;
  } else if (diffHour < 1) {
    return `${diffMin} минут назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
