function initializeCountdown(targetDate) {
  const daysCircle = document.querySelectorAll(".progress")[0];
  const hoursCircle = document.querySelectorAll(".progress")[1];
  const minutesCircle = document.querySelectorAll(".progress")[2];
  const secondsCircle = document.querySelectorAll(".progress")[3];

  const circumference = 2 * Math.PI * 50; // Circumference of the circle (r=50)
  const totalDays = Math.ceil(
    (targetDate - new Date()) / (1000 * 60 * 60 * 24)
  ); // Calculate max days initially

  const circleMaxValues = {
    days: totalDays, // Use totalDays as max
    hours: 24,
    minutes: 60,
    seconds: 60,
  };

  function updateProgressBar(circle, value, max) {
    const offset = circumference - (value / max) * circumference; // Calculate stroke-dashoffset
    circle.style.strokeDashoffset = offset; // Set the offset
  }

  function updateCountdown() {
    const now = new Date();
    const remainingTime = Math.floor((targetDate - now) / 1000);

    if (remainingTime < 0) {
      clearInterval(timer);
      return;
    }

    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    // Update text
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Update circles
    updateProgressBar(daysCircle, days, circleMaxValues.days);
    updateProgressBar(hoursCircle, hours, circleMaxValues.hours);
    updateProgressBar(minutesCircle, minutes, circleMaxValues.minutes);
    updateProgressBar(secondsCircle, seconds, circleMaxValues.seconds);
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Call once immediately
}

// Set the target date and initialize the countdown
const targetDate = new Date("2025-02-12T23:59:59"); // Change this to your target date
initializeCountdown(targetDate);
