export const responseSuccess = (params = { res, data, message }) => {
    return params.res.status(200).send({
        statusCode: 200,
        message: params.message,
        data: params.data
    });
}

export const responseNotFound = (params = { res, message}) =>{
    return params.res.status(404).send({
        statusCode: 404,
        message: params.message
    });
}

export const responseBadRequest = (params = { res, data, message}) => {
    return params.res.status(422).send({
        statusCode: 422,
        message: params.message
    });
}

export const responseError = (params = { res, message }) => {
    return params.res.status(500).send({
        statusCode: 500,
        message: params.message,
    });
}