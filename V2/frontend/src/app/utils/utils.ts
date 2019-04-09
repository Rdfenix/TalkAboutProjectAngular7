export const validateIsEmpty = (data: object): boolean => {
    for (let key in data) {
        if (data.hasOwnProperty(key) && data[key] != "") return false;
    }
    return true;
}