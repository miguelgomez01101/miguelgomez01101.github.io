// Leer el ancho de .box y su margen derecho
var boxes = document.querySelectorAll('.box');
var style = window.getComputedStyle(boxes[0]);
var boxWidth = parseFloat(style.width);
var marginRight = parseFloat(style.marginRight);
var totalWidth = boxWidth + marginRight;


function scrollToLeft(container){
    // Desplázateesplazar a la mitad del ancho de una caja a la izquierda
    container.scrollLeft -= totalWidth / 2;
}

function scrollToRight(container){
    // Desplazar a la mitad del ancho de una caja a la derecha
    container.scrollLeft += totalWidth / 2;
}

function handleWheel(event, container){
    if (event.deltaY < 0) {
        scrollToLeft(container);
    } else {
        scrollToRight(container);
    }
    event.preventDefault();
}

function setupScrolling(leftButtonId, rightButtonId, containerId){
    var container = document.getElementById(containerId);
    var leftButton = document.getElementById(leftButtonId);
    var rightButton = document.getElementById(rightButtonId);

    leftButton.addEventListener('click', function() { scrollToLeft(container); });
    rightButton.addEventListener('click', function() { scrollToRight(container); });
    container.addEventListener('wheel', function(event) { handleWheel(event, container); });
}

setupScrolling('leftButton1', 'rightButton1', 'container1');
setupScrolling('leftButton2', 'rightButton2', 'container2');
setupScrolling('leftButton3', 'rightButton3', 'container3');


window.onload = function() {
    // Obtén la fecha y hora actuales
    var now = new Date();
    var currentHour = now.getHours();

    // Obtén el día de la semana actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    var currentDay = now.getDay();

    // Define un objeto que mapea cada día a un id de contenedor
    var containerIds = {
        '3': 'container1', // Miércoles
        '4': 'container2', // Jueves
        '5': 'container3' // Viernes
        // Agrega más días según sea necesario
    };

    // Usa el objeto containerIds para obtener el id del contenedor del día actual
    var containerId = containerIds[currentDay];

    // Selecciona el contenedor con el id correspondiente
    var container = document.getElementById(containerId);

    // Define un objeto que mapea cada hora a un id de caja
    var boxIds = {
        '9': 'h-09',
        '11': 'h-11',
        '13': 'h-13',
        '14': 'h-14',
        '16': 'h-16',
        '19': 'h-19'
        // Agrega más horas según sea necesario
    };

    // Usa el objeto boxIds para obtener el id de la caja a la que quieres desplazarte
    var boxId = boxIds[currentHour];

    // Selecciona la caja con el id correspondiente
    var boxToScrollTo = document.getElementById(boxId);

    // Desplaza el contenedor a la caja seleccionada
    container.scrollLeft = boxToScrollTo.offsetLeft;
    // console.log('El valor actual de día y hora es: ' + containerId+ ' ' + boxId)
}


