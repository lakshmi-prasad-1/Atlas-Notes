import express from "express";
import { getNote,postNote,putNote,deleteNote ,getById} from "../controller/Controller.js";
const Router=express.Router();
Router.get('/',getNote)
Router.get('/:id',getById)
Router.post('/',postNote);
Router.put('/:id',putNote)
Router.delete("/:id",deleteNote);
export default Router;
