"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObjetc = void 0;
const createMenuObjetc = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuObjetc = createMenuObjetc;
