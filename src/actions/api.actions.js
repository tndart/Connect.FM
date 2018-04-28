import { actionTemplate, BaseTags } from "./base.actions";

const API_REQUEST = 'API_REQUEST'

const get = (entityName, url, onSuccess, onFailure) => {
    return actionTemplate( 
        API_REQUEST,
        { url, onSuccess, onFailure },        
        { entityName, isAsync: true, method: "GET" }, 
        [ BaseTags.API ]
    )
}

const post = (entityName, url, onSuccess, onFailure, postPayload) => {
    return actionTemplate( 
        API_REQUEST,
        { url, onSuccess, onFailure, postPayload },        
        { entityName, isAsync: true, method: "POST" }, 
        [ BaseTags.API ]
    )
}

export const APIActions = {
    API_REQUEST,
    get,
    post
}
