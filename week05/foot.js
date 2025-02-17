// Function to scroll to the calculator form
function scrollToForm() {
    document.getElementById("calculator").scrollIntoView({ behavior: 'smooth' });
}

// Function to calculate carbon footprint
function calculateFootprint() {
    const electricity = parseFloat(document.getElementById("electricity").value);
    const mileage = parseFloat(document.getElementById("mileage").value);
    const flights = parseFloat(document.getElementById("flights").value);

    if (isNaN(electricity) || isNaN(mileage) || isNaN(flights)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const carbonPerKWh = 0.92; // kg CO2 per kWh
    const carbonPerKm = 0.21; // kg CO2 per km
    const carbonPerFlight = 0.9 * 1000; // kg CO2 per flight (converted from tons)

    const electricityFootprint = electricity * carbonPerKWh;
    const carFootprint = mileage * carbonPerKm;
    const flightCO2 = flights * carbonPerFlight;

    const totalFootprint = electricityFootprint + carFootprint + flightCO2;

    // Displaying the result
    document.getElementById("total-footprint").textContent = totalFootprint.toFixed(2);
    document.getElementById("breakdown").innerHTML = `
        <p>Electricity: ${electricityFootprint.toFixed(2)} kg CO2</p>
        <p>Car mileage: ${carFootprint.toFixed(2)} kg CO2</p>
        <p>Flights: ${flightCO2.toFixed(2)} kg CO2</p>
    `;

    // Hide the input form and show the result section
    document.getElementById("calculator").style.display = "none";
    document.getElementById("result").style.display = "block";
}

// Function to restart the calculator
function restartCalculator() {
    document.getElementById("footprint-form").reset();
    document.getElementById("calculator").style.display = "block";
    document.getElementById("result").style.display = "none";
}


