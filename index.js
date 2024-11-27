// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
  return drivers.slice(0, 2); 
}
function returnLastTwoDrivers(array) {
    return array.slice(-2); 
}
function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
  }
  
  function returnLastTwoDrivers(array) {
    return array.slice(-2);
  }
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }