const initialState = {
    articles: 'coba'
}

function rootReducers(state = initialState, action) {
    /*
    if(action.type == 'ADD_ARTICLES'){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }*/
    return state
}

export default rootReducers