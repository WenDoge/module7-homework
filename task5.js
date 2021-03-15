// Переписать консольное приложение из предыдущего юнита на классы.

let powerCalc = 0;
class Device
{
constructor ()
  {
    this.device = 'electical';
  }
  getSize() 
  {
    console.log(`size of ${this.name} is ${this.size}`);
  }
  switch(status)
  {
    if (status == 'on')
      {
        powerCalc+= this.power;
        console.log(`Power consumption of the ${this.name} is ${this.power} Watt`)
      }
    return powerCalc;
  }
}

class SmallDevice extends Device
{ constructor(name, power)
 {
  super(),
  this.power = power,
  this.name = name,
  this.size = "small"
 }
}
class BigDevice extends Device
{ constructor(name, power) 
 {
  super(),
  this.power = power,
  this.name = name,
  this.size = "big"
 }
}
const lamp = new SmallDevice('lamp', 75);
const computer = new BigDevice('computer', 500);
lamp.switch('on');
computer.switch('on');
console.log(`Overall power consumption is ${powerCalc} Watt`);