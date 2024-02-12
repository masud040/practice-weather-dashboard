export default function formatedDate(value, type, inMs) {
  if (!type) return value;
  if (!inMs) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  }
  if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", options).format(date);
}
