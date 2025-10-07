// Problem Statement - 19

// Q.No: Write a function that converts a temperature in Celsius to Fahrenheit
// Input: Temperature in Celsius
// Return: Temperature in Fahrenheit
// Celsius and Fahrenheit are two measure temperature
// Formula(Temperature in degrees Celsius('C) * 9/5) + 32
// Example:
// 27 degrees = (27 * 9/5) + 32 = 80.6 Fahrenheit
// 34 degrees = (34 * 9/5) + 32 = 93.2 Fahrenheit

function convertTemperatureCelsiusToFahrenheit(celsius) {
    // console.log(Celsius);
    if (typeof celsius !== "number") {
        throw new TypeError(`celsius=${celsius} must be number type`)
    }
    if (Number.isNaN(celsius)) {
        throw new RangeError(`celsius=${celsius} should not be NaN`)
    }
    if (!Number.isFinite(celsius)) {
        throw new RangeError(`celsius=${celsius} should be finite number`)
    }
    const fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}

// console.log(convertTemperatureCelsiusToFahrenheit(27))

// console.log(convertTemperatureCelsiusToFahrenheit(34))

// console.log(convertTemperatureCelsiusToFahrenheit(7.7))

// console.log(convertTemperatureCelsiusToFahrenheit(-232))

// console.log(convertTemperatureCelsiusToFahrenheit("34"))

// console.log(convertTemperatureCelsiusToFahrenheit(NaN))

// console.log(convertTemperatureCelsiusToFahrenheit(Infinity))

const test = [
    27,
    34,
    7.7,
    0,
    -232,
    "34",
    NaN,
    Infinity,
    undefined,
    null,
]

test.forEach((num, index) => {
    try {
        console.log(`Test ${index + 1} | input ${num} -> Success :`, convertTemperatureCelsiusToFahrenheit(num), "Fahrenheit")
    } catch (error) {
        console.log(`Test ${index + 1} | input ${num} -> Error :`, error.message)
    }
})


