function solve() {

    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts; // this.parts.quality = parts.engine*parts.power
            this.fuel = fuel;

            let entries = Object.entries(this.parts);
            let engineQ = entries[0][1];
            let powerQ = entries[1][1];
            parts.quality = engineQ * powerQ;
        }

        drive(input) {
            this.fuel = this.fuel - input;
        }

    }
    let parts = {
        engine: 5,
        power: 100,
    }
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(150);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}
solve();