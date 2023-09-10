// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to display current UTC time in milliseconds
function displayCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    return currentUTCTime;
}

// Update the HTML elements with the dynamic data
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${getCurrentDayOfWeek()}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (milliseconds): ${displayCurrentUTCTime()}`;
