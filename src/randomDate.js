export class dailyImage {
  static getImage(randomDate) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest ();
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${randomDate}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();

    });
  }

}

export function randomDate(start, end) {
  let d = new Date(start.getTime() + Math.random() * (end.getTime() -  start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-'); //"2005-02-15"
}


export function asteroidList(startDate,endDate){
  return new Promise(function(resolve, reject) { 
    let request = new XMLHttpRequest();
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    };
    request.open("GET", url, true);
    request.send();
  });


}