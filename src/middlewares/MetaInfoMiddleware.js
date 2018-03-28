export const MetaInfoMiddleware = store => next => action => {

    if (typeof action === 'object') {
        if (!action.meta){
            action.meta = {}
        }
        let date = new Date()
        action.meta.time = date.toJSON()
        action.meta.id = Math.round(Math.random() * date.valueOf())
    }

    next(action)
}