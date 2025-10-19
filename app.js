function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);
