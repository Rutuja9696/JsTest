/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
  try {
    if (rgbValues.length != 3) {
      throw new Error("Invalid Input");
      return;
    }
    for (let i of rgbValues) {
      if (isNaN(i)) {
        throw new Error("Invalid Input");
        return;
      } else if (i > 255 || i < 0) {
        throw new Error("Invalid Input");
        return;
      }
    }
    const display =
      "#" +
      ((1 << 24) + (rgbValues[0] << 16) + (rgbValues[1] << 8) + rgbValues[2])
        .toString(16)
        .slice(1);
    console.log(display);
    return display;
  } catch (err) {
    throw err;
  }
};
// rgbToHexConversion(10, 10, 10000);
module.exports = rgbToHexConversion;
