var total = 0;
function funciWithArg(digit){
    total = (digit + 9) / 5;
}
funciWithArg(6);

console.log(total);
module.exports = funciWithArg;