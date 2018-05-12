import { fetch } from 'cross-fetch'
import Cookies from 'js-cookie'

import { APIActions } from '../actions/api.actions'
import { errorReport } from '../actions/logger.actions'
import { UserActions } from '../actions/user.actions'
import { config } from '../util/helpers'


export const ApiMiddleware = store => next => action => {
    
    let auth = store.getState().user.auth;

    let token = ''
    if (auth){
        token = auth.jwtToken
    }

    if (action.type === APIActions.API_REQUEST) {
        const request = action.payload
        const method = action.meta.method
        let body = undefined;

        if(method === "POST"){
            body = JSON.stringify( { payload: action.payload.postPayload } );
        }
        if (request.onSuccess && request.url) {
            const options = {
                body,
                method,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            fetch(request.url, options)
                .then(response => {
                    if (response.status === 200 && response.ok){
                        console.log("headers")
                        console.dir(response)

                        response.json().then(
                            json => {
                                if (json.message) {
                                    errorHandler(json, request.onFailure)
                                }
                                else {
                                    request.onSuccess(json)
                                }
                            },
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

