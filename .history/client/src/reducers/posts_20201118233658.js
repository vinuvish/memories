const reducer = (posts = [], action) => {

    switch (action.type) {
        case 'FERCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;

    }
}