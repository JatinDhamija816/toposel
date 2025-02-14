class ApiError extends Error {
  constructor(statusCode, message = "Internal Server Error", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
}

export default ApiError;
