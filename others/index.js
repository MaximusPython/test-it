// var events = require('events'); // подключение встроенного модуля
// моудль который отслеживает различные события



// var myEmit = new events.EventEmitter();

//  myEmit.on('some_event', function(text) {
//     console.log(text);
//  });

//  myEmit.emit('some_event', 'Обработчик событий сработал!');

var events = require('events');
var util = require('util');
// модуль util который унаследовыет все события для 
// конкретного обьекта

var Cars = function(model) { // для 
    // всех обьектов которые будут созданы на основе
    // cars мы будем передавать значение model
    this.model = model; // и это значения мы будем присаивать

}; 

util.inherits(Cars, events.EventEmitter); // для 
// всех обьектов которые будут созданы на основе констурктора
// Cars будет унаследован обработчик событий. передаем
// сам конструктор обьектов и что конкретно хотим унаследовать
// а именно обработчик событий events.EventEmitter

var bmw = new Cars('BMW'); // создаем 3 обьекта на основе 
// констурктора обьекта Cars.
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];// создали массив в него помещу все
// обьекты которые мы создали

cars.forEach(function(car) { //по данному
    //параметру мы сможем брать каждый элемент
    // в данном списке через цикл foreach
    car.on('speed', function(text) { // в каждом пройденном
        // элементе использую метод on и здесь будет остлеживаемое
        // событие и функция с передаваемым параметорм текст
        console.log (car.model + " speed is - " + text);
        // и вывод инфы модель машины и ее скорость которую мы передали
    });

});
// берем обьект и через функцию emit передаем
// 2 параметра. 1 какой обработчик событий должен сработать
// и 2 не обязательный параметр скорость

bmw.emit('speed', '222 km');
volvo.emit('speed', '224 km');
audi.emit('speed', '218 km');

// util помогает унаследовать события для группы 
// определенных обьектов