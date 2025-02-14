class ApiResponse {
  constructor(statusCode = 200, message = "Success", data = null) {
    this.statusCode = Number.isInteger(statusCode) ? statusCode : 500;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
