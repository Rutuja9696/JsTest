/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  const totalTime = 1;
  let hours = Math.floor(totalTime / 60 / 60);
  let minutes = Math.floor(totalTime / 60);
  let second = totalTime / 60 / 60 / 60;

  return hours + ":" + minutes + ":" + seconds;
};
console.log(convertTime(1));
// convertTime();
module.exports = convertTime;
