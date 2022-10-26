var Rides = /** @class */ (function () {
    function Rides() {
    }
    Rides.prototype.start = function () {
        Rides._activeRides++;
    };
    Rides.prototype.stop = function () {
        Rides._activeRides++;
    };
    Object.defineProperty(Rides, "activeRides", {
        get: function () {
            return Rides._activeRides;
        },
        enumerable: false,
        configurable: true
    });
    Rides._activeRides = 0;
    return Rides;
}());
var ride1 = new Rides();
ride1.start();
var ride2 = new Rides();
ride2.start();
console.log(Rides.activeRides);
