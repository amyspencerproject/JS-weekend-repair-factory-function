const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

// const createVehicle = function (type, numWheels, color) {
//   const vehicle = {
//     vehicle: type,
//     numWheels: numWheels,
//     color: color
//   };
//   return vehicle;
// };

const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("auto", 4, "forest green");
const bike = createVehicle("bici", 2, "goldenrod");
const skateboard = createVehicle("long board", 4, "natural wood");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  // clears the repairList everytime button is clicked
  repairList.innerHTML = "";
  // Gets the repairList
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });
  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span class="vehicle">${vehicle.type}</span> needs some 💜`;
    repairList.append(li);
  }
});
