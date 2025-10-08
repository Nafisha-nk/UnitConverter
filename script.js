// Tab switching functionality
document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs and sections
        document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
        document
        .querySelectorAll(".converter-section")
        .forEach((s) => s.classList.remove("active"));

        // Add active class to clicked tab and corresponding section
        tab.classList.add("active");
        const tabId = tab.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

// Length conversion
document.getElementById("length-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("length-value").value);
    const fromUnit = document.getElementById("length-from").value;
    const toUnit = document.getElementById("length-to").value;

    // Convert to meters first (base unit)
    let meters = 0;

    switch (fromUnit) {
        case "millimeter":
        meters = value / 1000;
        break;
        case "centimeter":
        meters = value / 100;
        break;
        case "meter":
        meters = value;
        break;
        case "kilometer":
        meters = value * 1000;
        break;
        case "inch":
        meters = value * 0.0254;
        break;
        case "foot":
        meters = value * 0.3048;
        break;
        case "yard":
        meters = value * 0.9144;
        break;
        case "mile":
        meters = value * 1609.344;
        break;
    }

    // Convert from meters to target unit
    let result = 0;

    switch (toUnit) {
        case "millimeter":
        result = meters * 1000;
        break;
        case "centimeter":
        result = meters * 100;
        break;
        case "meter":
        result = meters;
        break;
        case "kilometer":
        result = meters / 1000;
        break;
        case "inch":
        result = meters / 0.0254;
        break;
        case "foot":
        result = meters / 0.3048;
        break;
        case "yard":
        result = meters / 0.9144;
        break;
        case "mile":
        result = meters / 1609.344;
        break;
    }

    // Display result
    document.getElementById("length-result-value").textContent =
        result.toFixed(6);
    document.getElementById("length-result").classList.add("active");
});

// Weight conversion
document.getElementById("weight-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("weight-value").value);
    const fromUnit = document.getElementById("weight-from").value;
    const toUnit = document.getElementById("weight-to").value;

    // Convert to kilograms first (base unit)
    let kilograms = 0;

    switch (fromUnit) {
        case "milligram":
        kilograms = value / 1000000;
        break;
        case "gram":
        kilograms = value / 1000;
        break;
        case "kilogram":
        kilograms = value;
        break;
        case "ounce":
        kilograms = value * 0.0283495;
        break;
        case "pound":
        kilograms = value * 0.453592;
        break;
    }

  // Convert from kilograms to target unit
    let result = 0;

    switch (toUnit) {
        case "milligram":
        result = kilograms * 1000000;
        break;
        case "gram":
        result = kilograms * 1000;
        break;
        case "kilogram":
        result = kilograms;
        break;
        case "ounce":
        result = kilograms / 0.0283495;
        break;
        case "pound":
        result = kilograms / 0.453592;
        break;
    }

    // Display result
    document.getElementById("weight-result-value").textContent =
        result.toFixed(6);
    document.getElementById("weight-result").classList.add("active");
});

// Temperature conversion
document
    .getElementById("temperature-form")
    .addEventListener("submit", function (e) {
    e.preventDefault();

    const value = parseFloat(
        document.getElementById("temperature-value").value
    );
    const fromUnit = document.getElementById("temperature-from").value;
    const toUnit = document.getElementById("temperature-to").value;

    // Convert to Celsius first (base unit)
    let celsius = 0;

    switch (fromUnit) {
        case "celsius":
            celsius = value;
            break;
        case "fahrenheit":
            celsius = ((value - 32) * 5) / 9;
            break;
        case "kelvin":
            celsius = value - 273.15;
            break;
    }

    // Convert from Celsius to target unit
    let result = 0;

    switch (toUnit) {
        case "celsius":
            result = celsius;
            break;
        case "fahrenheit":
            result = (celsius * 9) / 5 + 32;
            break;
        case "kelvin":
            result = celsius + 273.15;
            break;
        }

        // Display result
        document.getElementById("temperature-result-value").textContent =
        result.toFixed(2);
        document.getElementById("temperature-result").classList.add("active");
});
