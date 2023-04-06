import { Router} from "express";
import note from "./models/schema.js"

const noteRouter = Router();

noteRouter.get('/getAllNotes', (req, res)=> {
    res.status(200).send({
        data: [],
        message: 'All notes',
        success: true
    })
})

noteRouter.post('/addNewNote', async(req, res)=> {
    // req.body
    const post = new note({
		title: req.body.title,
		text: req.body.text,
	})
    await post.save();

    res.status(200).send({
        data: [],
        message: 'Note added',
        success: true
    })
})

noteRouter.delete('/delete', (req, res)=> {
    res.status(200).send({
        data: [],
        message: 'Note deleted',
        success: true
    })
})

noteRouter.put('/update', (req, res)=> {
    res.status(200).send({
        data: [],
        message: 'Note updated',
        success: true
    })
})


export default noteRouter;
