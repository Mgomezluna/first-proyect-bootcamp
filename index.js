function Computadora(ram, cpu, disco, monitor, gpu){
 this.ram = ram;
 this.cpu = cpu;
 this.disco = disco;
 this.monitor = monitor;
 this.gpu = gpu;
}

const compu1 = new Computadora("2gb", "3gb", "450gb", "telcel", false);
const compu2 = new Computadora("2gb", "3gb", "2050gb", "telcel", false);
const compu3 = new Computadora("2gb", "3gb", "460gb", "telcel", true);
const compu4 = new Computadora("2gb", "3gb", "4500gb", "telcel", false);
const compu5 = new Computadora("2gb", "6gb", "4330gb", "telcel", true);


const devolverLista = ( Computadora, compu1, compu2, compu3, compu4, compu5) =>{

    Computadora.forEach(compu => {
        compu.push(compu1);
        compu.push(compu2);
        compu.push(compu3);
        compu.push(compu4);
        compu.push(compu5);

    });

  
    return Computadora.compu;
}

console.log(Computadora);

