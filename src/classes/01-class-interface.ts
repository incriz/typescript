
interface ICar{
    go(speed: number): void,
    maxSpeed?: number
}

export class Car implements ICar{
    go(speed: number){
        console.log("Let' go with speed", speed.toFixed())
  } stop(){
      console.log("Stopped")
    }
}

const car = new Car;

car.go(12)
//car.maxSpeed = 220