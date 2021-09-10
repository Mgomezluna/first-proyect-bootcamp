const Computadora = (ram, cpu, disco, monitor, gpu) => {
 this.ram = ram;
 this.cpu = cpu;
 this.disco = disco;
 this.monitor = monitor;
 this.gpu = gpu;
}

const devolverLista = ( computadora ) =>{
    let listaComputadoras = [];
    computadora.forEach(c => {

        listaComputadoras.push(
            new computadora("2gb", "3gb", "450gb", "telcel", false),
            new computadora("2gb", "3gb", "450gb", "telcel", false),
            new computadora("2gb", "3gb", "450gb", "telcel", true),
            new computadora("2gb", "3gb", "450gb", "telcel", false),
            new computadora("2gb", "6gb", "4330gb", "telcel", true),
        )

    });
    console.log(listaComputadoras);
    return listaComputadoras;
}