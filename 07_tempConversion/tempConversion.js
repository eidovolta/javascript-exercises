const ftoc = function(degreesInF) {
  let degreesInC = (degreesInF - 32) * (5 / 9);
  return parseFloat(degreesInC.toFixed(1));
};

const ctof = function(degreesInC) {
  let degreesInF = degreesInC * (9 / 5) + 32;
  return parseFloat(degreesInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
