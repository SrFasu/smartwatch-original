const $tiempo = document.querySelector('.reloj__tiempo'),
$fecha = document.querySelector('.reloj__fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);