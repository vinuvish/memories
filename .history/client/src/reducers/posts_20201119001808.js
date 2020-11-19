export default reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FERCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;

    }
}