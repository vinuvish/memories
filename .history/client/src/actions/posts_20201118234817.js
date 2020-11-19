import * as api from '../api';


//Actions Creaters
const getPosts = () => {
    const action = { type: 'FETCH_ALL', payload: [] }
    return action
}