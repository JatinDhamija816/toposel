class CustomJWTError extends Error {
  constructor(statusCode = 500, message = "Internal Server Error") {
    super(message);
    this.name = "CustomJWTError";
    this.statusCode = statusCode;
    this.success = false;
  }
}

export default CustomJWTError;
