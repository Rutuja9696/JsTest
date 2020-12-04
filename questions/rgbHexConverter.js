/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
  function rgb(r, g, b) {
    if (rgb.length > 255) {
      console.log("Invalid Input");
    } else {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  }
  console.log(rgb(10, 10, 10));
};
rgbToHexConversion(10, 10, 10);
module.exports = rgbToHexConversion;
