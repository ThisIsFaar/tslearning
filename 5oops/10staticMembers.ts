class Rides {
  private static _activeRides = 0;

  start(): void {
    Rides._activeRides++;
  }
  stop(): void {
    Rides._activeRides++;
  }

  static get activeRides() {
    return Rides._activeRides;
  }
}

let ride1 = new Rides();
ride1.start();

let ride2 = new Rides();
ride2.start();

console.log(Rides.activeRides);
