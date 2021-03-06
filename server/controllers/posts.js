
import PostMessage from '../models/postMessage.js'
export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find()
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const createPosts = async (req, res) => {

    const postBody = req.body;
    const newPost = new PostMessage(postBody)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json(error);
    }


}