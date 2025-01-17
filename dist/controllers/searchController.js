"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObjetc)(''),
        list,
        query
    });
};
exports.search = search;
