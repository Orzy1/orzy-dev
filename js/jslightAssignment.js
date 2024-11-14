// Function to toggle the light on and off
function toggleLight() {
    const lightBulb = document.getElementById("lightBulb");
    const switchButton = document.getElementById("switchButton");

    // Check the current state of the light (whether it's on or off)
    if (lightBulb.classList.contains("text-yellow-500")) {
        // Turn the light off (change the color and icon)
        lightBulb.classList.remove("text-yellow-500");
        lightBulb.classList.add("text-gray-400");
        lightBulb.classList.remove("fa-sun");
        lightBulb.classList.add("fa-lightbulb");
        
        // Change button text
        switchButton.textContent = "Turn On Light";
    } else {
        // Turn the light on (change the color and icon)
        lightBulb.classList.remove("text-gray-400");
        lightBulb.classList.add("text-yellow-500");
        lightBulb.classList.remove("fa-lightbulb");
        lightBulb.classList.add("fa-sun");

        // Change button text
        switchButton.textContent = "Turn Off Light";
    }
}
