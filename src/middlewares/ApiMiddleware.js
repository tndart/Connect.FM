import { fetch } from 'cross-fetch'
import Cookies from 'js-cookie'

import { APIActions } from "../actions/api.actions"
import { errorReport } from '../actions/logger.actions'
import { config } from '../util/helpers'


export const ApiMiddleware = store => next => action => {
    
    let auth = Cookies.get(config.AuthorizationCookieName)

    let token = null
    if (auth){
        token = auth
    }

    if (action.type === APIActions.API_REQUEST) {
        const request = action.payload;

        if (request.onSuccess && request.url) {
            const options = {
                headers: {
                    'Authorization': 'Bearer ' + 'dsa'
                }
            }
            fetch(request.url, options)
                .then(response => {
                    if (response.status === 200 && response.ok){
                        console.log("headers")
                        console.dir(response)

                        response.json().then(
                            json => request.onSuccess(json),
                            error => errorHandler(error, request.onFailure)
                        )
                    } else {
                        if (response.status === 404){
                            errorHandler({ code: response.status, message: response.statusText }, request.onFailure)
                        } else {
                            errorHandler({ message: "Unknown error" }, request.onFailure)
                        }                       
                    }
                }
                , error => {
                    errorHandler(error, request.onFailure)
                })
        }
    }

    const errorHandler = (error, onFailureFunc) => {
        errorReport(error.message, error)
    
        if (onFailureFunc) {
            onFailureFunc(error)
        }
    }

    next(action)
}

