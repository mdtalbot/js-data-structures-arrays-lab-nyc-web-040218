// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  let newdrivers = [...drivers, name];
  return newdrivers;
}

function prependDriver(name) {
  let newdrivers = [name, ...drivers];
  return newdrivers;
}

function removeLastDriver() {
  let newdrivers = drivers.slice(0, drivers.length - 1);
  return newdrivers;
}
function removeFirstDriver() {
  let newdrivers = drivers.slice(1);

  return newdrivers;
}

