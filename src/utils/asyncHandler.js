const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(`asyncHandler error: ${error.message}`);
    res
      .status(error.code ?? 500)
      .json({ success: false, message: error.message });
  }
};

export default asyncHandler;
