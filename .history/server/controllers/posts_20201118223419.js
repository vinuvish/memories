
import PostMessage from '../models/postMessage.js'
export const getPosts = async (req, res) => {

    try {

        const postMessages = await PostMessage.find()
    } catch (error) {

    }


    res.send('THIS WORKS');
}

export const createPosts = (req, res) => {
    res.send('POST CREATION');
}