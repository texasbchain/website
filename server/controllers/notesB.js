import express from 'express';
import mongoose from 'mongoose';
import NoteMessage from "../models/noteMessage";

const router = express.Router();

export const getNotes = async (req, res) => {
    try{
        const noteMessages = await NoteMessage.find();

        console.log(noteMessages);

        res.status(200).json(noteMessages);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}
export const getNote = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await NoteMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNote = async (req, res) => {
    const {note, link } = req.body;

    const newNoteMessage = new NoteMessage({note, link });
    try {
        await newNote.save();
        res.status(201).json(newNoteMessage);
    } catch (error){
        res.status(409).json({message: error.message});
    }
    }

    export default router;