const initialState = {
    favorites: ['coba']
}

function rootReducers(state = initialState, action) {
    if(action.type == 'ADD_FAVORITES'){
        return Object.assign({}, state, {
            articles: state.favorites.push(action.payload)
        })
    }
    return state
}

export default rootReducers