export const ERROR_CLIENT = "ERROR_CLIENT"
export const ERROR_SERVER = "ERROR_SERVER"
export const ERROR_UNKNOWN = "ERROR_UNKNOWN"

export const Severity = {
    ERROR: "ERROR",
    WARNING: "WARNING",
    INFO: "INFO",
    TRACE: "TRACE"
}

const report = (type = ERROR_UNKNOWN, errorMessage = "", severity = Severity.TRACE, originErrorObj) => {
    return dispatch => dispatch({
        type,
        payload: {
            errorMessage,
            severity,
            originErrorObj
        }
    })
}

export const errorReport = (errorMessage, originErrorObj) => {
    report(ERROR_CLIENT, errorMessage, Severity.ERROR, originErrorObj)
}