export const setValueOrDefault = (prop, value) => {
        if (value !== undefined){
            prop = value;
        }
        return prop;
    };