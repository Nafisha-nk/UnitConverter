# Unit Converter

A simple, responsive web application for converting between different units of measurement including length, weight, and temperature.

## Features

- **Length Conversion**: Convert between millimeter, centimeter, meter, kilometer, inch, foot, yard, and mile
- **Weight Conversion**: Convert between milligram, gram, kilogram, ounce, and pound
- **Temperature Conversion**: Convert between Celsius, Fahrenheit, and Kelvin
- **User-Friendly Interface**: Clean, modern design with intuitive controls
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Results**: Instant conversion with precise calculations

## How to Use

1. **Select Conversion Type**:
   - Click on the tabs (Length, Weight, Temperature) to switch between conversion types

2. **Enter Values**:
   - Input the numerical value you want to convert
   - Select the source unit (the unit you're converting from)
   - Select the target unit (the unit you're converting to)

3. **Get Results**:
   - Click the "Convert" button
   - View the converted value displayed below the form

## Supported Units

### Length
- Millimeter (mm)
- Centimeter (cm)
- Meter (m)
- Kilometer (km)
- Inch (in)
- Foot (ft)
- Yard (yd)
- Mile (mi)

### Weight
- Milligram (mg)
- Gram (g)
- Kilogram (kg)
- Ounce (oz)
- Pound (lb)

### Temperature
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No external libraries or frameworks required
- **Client-Side Processing**: All calculations happen in the browser
- **Single File**: Complete application in one HTML file

## Installation

1. Download the `unit-converter.html` file
2. Open it in any modern web browser
3. No server setup or installation required

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser supporting ES6 JavaScript

## Conversion Formulas

### Length
All length conversions use meters as the base unit for intermediate calculations.

### Weight
All weight conversions use kilograms as the base unit for intermediate calculations.

### Temperature
- Celsius to Fahrenheit: `(°C × 9/5) + 32`
- Fahrenheit to Celsius: `(°F - 32) × 5/9`
- Celsius to Kelvin: `°C + 273.15`
- Kelvin to Celsius: `K - 273.15`

## File Structure

```
unit-converter/
├── index.html  # Main application file
├── style.css   # CSS file
├── script.js   # Script file
└── README.md   # This documentation file
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

## Future Enhancements

- Additional unit categories (volume, area, speed, etc.)
- History of recent conversions
- Favorite conversions
- Dark mode theme
- Export conversion results

## Support

For issues or questions, please check the code comments or create an issue in the project repository.

---

**Note**: This application performs all calculations client-side and does not require an internet connection or server backend once loaded in the browser.


https://roadmap.sh/projects/unit-converter
