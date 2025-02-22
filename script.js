// Function to calculate adjusted story points
function calculateAdjustedStoryPoints(totalSp, totalHours = 80, offDays = 2, publicHolidays = 0, meetingHours = 15, techSyncHours = 2, hoursPerSp = 5.3) {
    // Calculate available work hours after off days, public holidays, meetings, and tech sync
    const availableWorkHours = totalHours - (offDays * 8) - (publicHolidays * 8) - meetingHours - techSyncHours;
    
    // Calculate adjusted story points based on available work hours and hours per story point
    const adjustedSp = availableWorkHours / hoursPerSp;
    
    return Math.round(adjustedSp * 100) / 100; // Rounding to two decimal places
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
    const adjustedSp = calculateAdjustedStoryPoints(totalSp, totalHours, offDays, publicHolidays, meetingHours, techSyncHours, hoursPerSp);
    
    // Display the result
    document.getElementById('result').textContent = adjustedSp + ' SP';
});
