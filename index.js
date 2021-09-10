function Computadora(ram, cpu, disco, monitor, gpu){
 this.ram = ram;
 this.cpu = cpu;
 this.disco = disco;
 this.monitor = monitor;
 this.gpu = gpu;
}


compu = [];
compu.push(new Computadora("2gb", "3gb", "450gb", "telcel", false));
compu.push(new Computadora("2gb", "3gb", "2050gb", "telcel", false));
compu.push(new Computadora("2gb", "3gb", "460gb", "telcel", true));
compu.push(new Computadora("2gb", "3gb", "4500gb", "telcel", false));
compu.push(new Computadora("2gb", "6gb", "4330gb", "telcel", true));

let computadorasConGpu = compu.filter(compu => compu.gpu)

console.log(compu.length);
console.log(compu);
console.log(computadorasConGpu);
