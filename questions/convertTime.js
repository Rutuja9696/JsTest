/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  try {
    var time = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (isNaN(seconds)) {
      throw new Error("Invalid Input");
      return;
    }
    second = Number(3600);
    time.hours = Math.floor(second / 3600);
    time.minutes = Math.floor((second % 3600) / 60);
    time.seconds = Math.floor((second % 3600) % 60);

    return time;
  } catch (err) {
    throw err;
  }
};
convertTime(3600);
// convertTime("kjdfnldvn");
module.exports = convertTime;
