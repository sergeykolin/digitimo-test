module.exports = (res, error, status = 400) => {
    let err = error.message ? error.message : error;
    if (!err) err = 'Something went wrong';
    res.status(status).json({
        success: false,
        message: error.message ? error.message : error
    })
}