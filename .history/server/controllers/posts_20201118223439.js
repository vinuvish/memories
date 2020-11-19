
import PostMessage from '../models/postMessage.js'
export const getPosts = async (req, res) => {

    try {

        const postMessages = await PostMessage.find()
        console.log(postMessages);
        res.send('THIS WORKS');
    } catch (error) {

    }



}

export const createPosts = (req, res) => {
    res.send('POST CREATION');
}