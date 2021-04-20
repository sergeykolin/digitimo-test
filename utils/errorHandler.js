module.exports = (res, error, status = 500) => {
    res.status(status).json({
        success: false,
        message: error.message ? error.message : error
    })
}