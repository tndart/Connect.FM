import { actionTemplate, BaseTags } from "./base.actions";

const API_REQUEST = 'API_REQUEST'

const get = (entityName, url, onSuccess, onFailure) => {
    return actionTemplate( 
        API_REQUEST,
        { url, onSuccess, onFailure },        
        { entityName, async: true }, 
        [ BaseTags.API ]
    )
}

export const APIActions = {
    API_REQUEST,
    get
}
