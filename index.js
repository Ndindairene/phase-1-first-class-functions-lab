const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru','Amari', 'Mo'];
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru','Amari', 'Mo'];
    return drivers.slice(-2);
}

const selectingDrivers= (function (){
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
})();

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}
const fareTripler = function(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}
