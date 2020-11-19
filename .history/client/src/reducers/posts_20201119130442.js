
export default (posts = [], action) => {
    switch (action.type) {
        case 'FERCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;

    }
}