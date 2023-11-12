document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its id
    var button = document.getElementById('btn');
    
    // Initialize a click counter variable
    var clickCount = 0;

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Increment the click counter
        clickCount++;

        // Update the button's text label with the new click count
        button.innerHTML = clickCount;
    });
});
