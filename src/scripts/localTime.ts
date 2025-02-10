function updateLocalTime(): void {
  const timeElement = document.querySelector(".local-time");
  if (!timeElement) return;

  const VOLGOGRAD_OFFSET = 3; // UTC+3
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const volgogradTime = new Date(utc + 3600000 * VOLGOGRAD_OFFSET);

  timeElement.textContent = volgogradTime.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

setInterval(updateLocalTime, 1000);
updateLocalTime();
