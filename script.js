// Function to calculate adjusted story points based on provided inputs
function calculateAdjustedStoryPoints(totalSp, totalHours = 80, offDays = 2, publicHolidays = 0, meetingHours = 15, techSyncHours = 2, hoursPerSp = 5.3) {
    // Calculate available work hours after off days, public holidays, meetings, and tech sync
    const availableWorkHours = totalHours - (offDays * 8) - (publicHolidays * 8) - meetingHours - techSyncHours;
    
    // Calculate adjusted story points based on available work hours and hours per story point
    const adjustedSp = availableWorkHours / hoursPerSp;
    
    return {
        availableWorkHours: availableWorkHours,
        adjustedSp: adjustedSp.toFixed(2), // rounded to 2 decimal places
        nonCodingTime: meetingHours + techSyncHours, // Total non-coding time
        totalOffDaysAndHolidays: offDays * 8 + publicHolidays * 8, // Off days + public holidays in hours
        totalSprintHours: totalHours
    };
}

// Event listener for form submission
document.getElementById('storyPointsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get input values from the form
    const totalSp = parseFloat(document.getElementById('totalSp').value);
    const totalHours = parseFloat(document.getElementById('totalHours').value);
    const offDays = parseFloat(document.getElementById('offDays').value);
    const publicHolidays = parseFloat(document.getElementById('publicHolidays').value);
    const meetingHours = parseFloat(document.getElementById('meetingHours').value);
    const techSyncHours = parseFloat(document.getElementById('techSyncHours').value);
    const hoursPerSp = parseFloat(document.getElementById('hoursPerSp').value);
    
    // Calculate the adjusted story points
    const calculationResults = calculateAdjustedStoryPoints(totalSp, totalHours, offDays, publicHolidays, meetingHours, techSyncHours, hoursPerSp);
    
    // Display the dynamic results in the "calculationResults" section
    document.getElementById('totalHoursResult').textContent = calculationResults.totalSprintHours;
    document.getElementById('offDaysResult').textContent = `${offDays + publicHolidays} days (${calculationResults.totalOffDaysAndHolidays} hours)`;
    document.getElementById('nonCodingTimeResult').textContent = `${calculationResults.nonCodingTime} hours (Scrum + Tech Sync)`;
    document.getElementById('availableWorkHoursResult').textContent = calculationResults.availableWorkHours;
    document.getElementById('adjustedSpResult').textContent = `${calculationResults.adjustedSp} SP`;
});
