import Notes from '../models/Notes.js';
export async function getNote(req,res){
    try {
        const notes=await Notes.find().sort({updatedAt:-1});
        res.json(notes);
    } catch (error) {
        console.error("error was occured in get function",error);
        res.status(510).json({message:"error was occured"})
    }
//    res.send("notes was created");
}

export async function getById(req,res) {
    try {
        const NotesById=await Notes.findById(req.params.id);
        res.json(NotesById);
    } catch (error) {
        console.error("error was occured in get by id function",error);
        res.status(510).json({message:"error was occured in getById function"})
    }
}
export async function postNote(req,res){
        try {
            const {title,matter}=req.body;
            const newNote=new Notes({title,matter})
            const  savedNote= await newNote.save()
            res.status(201).json(savedNote);
        } catch (error) {
            console.error("error was occured in post function",error);
            res.status(510).json({message:"error was occured"})
        }
    
}
export async function putNote(req,res){
    try {
        const {title,matter}=req.body;
        const updatedNotes=await Notes.findByIdAndUpdate(req.params.id,{title,matter});
        // const {title,matter}=req.body;
        const presNotes=await Notes.findByIdAndUpdate(req.params.id,{title,matter});
        res.json(`updated notes : ${updatedNotes.matter} to ${presNotes.matter}`);
    } catch (error) {
        console.error("error was occured in put function",error);
        res.status(510).json({message:"error was occured"})
    }
}

export async function deleteNote(req,res){
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.json(`note was deleted successfully`);
    } catch (error) {
        console.error("error was occured in delete function",error);
        res.status(510).json({message:"error was occured"})
    }
}