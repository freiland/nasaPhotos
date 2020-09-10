export default class ImageSearch {
  static getImage(searchTerm) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open('GET', url, true);
      request.send();

    });
  }
}