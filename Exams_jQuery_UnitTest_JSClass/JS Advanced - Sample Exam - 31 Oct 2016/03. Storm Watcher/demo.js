(function () {
    let id = 0;

    return class Record {

        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = +temperature;
            this.humidity = +humidity;
            this.pressure = +pressure;
            this.windSpeed = +windSpeed;
        }

        toString() {
            let list = [];
            this.id++;
            if (this.temperature < 20 && this.pressure < 700 || this.pressure > 900 && this.windSpeed > 25) {
                list.push(`Reading ID: ${this.id}`);
                list.push(`Temperature: ${this.temperature}*C`);
                list.push(`Relative Humidity: ${this.humidity}%`);
                list.push(`Pressure: ${this.pressure}hpa`);
                list.push(`Wind Speed: ${this.windSpeed}m/s`);
                list.push("Weather: Stormy");

                return list.join("" + '\n')
            }
            list.push(`Reading ID: ${this.id}`);
            list.push(`Temperature: ${this.temperature}*C`);
            list.push(`Relative Humidity: ${this.humidity}%`);
            list.push(`Pressure: ${this.pressure}hpa`);
            list.push(`Wind Speed: ${this.windSpeed}m/s`);
            list.push("Weather: Not stormy");
            return list.join("" + '\n')

        }
    }
})();
