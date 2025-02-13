class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message ?? "Internal Server Error";
    this.success = false;
    this.errors = errors;
  }
}

export default ApiError;
