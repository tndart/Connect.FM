
let _history;
let _store;

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

export const config = {
    AuthorizationCookieName: "ConnectFM|Auth",
    UserDataCookieName: "ConnectFM|UserData",
    ServerHost: `https://connectfm.cloudns.cc:8080`,    
}

// ServerHost: "localhost:8080"
// ServerHost: "193.106.55.131:8080",
