export class Endpoints {
  static baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/"
      : "https://reactblog-strapi.herokuapp.com/";
  static uploadFiles = Endpoints.baseUrl + "files";
  static getFiles = Endpoints.baseUrl + "files";
  static getFileById = Endpoints.baseUrl + "files";
  static createSharedFile = Endpoints.baseUrl + "sharefile";
  static getSharedFileById = Endpoints.baseUrl + "sharefile";
  static updateDownloads = Endpoints.baseUrl + "files";
}
