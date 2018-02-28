
var _history;
var _store;

export function attachHistory(history){
    _history = history;
}

export function getHistory(){
    return _history;
}

export function attachStore(store){
    _store = store;
}

export function getStore(){
    return _store;
}