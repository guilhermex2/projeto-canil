import { Request, Response } from "express";
import {createMenuObjetc} from '../helpers/createMenuObject'
import {Pet} from '../models/pet'

export const search = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObjetc('')
    })
}