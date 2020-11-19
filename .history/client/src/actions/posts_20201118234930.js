import * as api from '../api';


//Actions Creaters
const getPosts = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] }
    dispatch(action);
}