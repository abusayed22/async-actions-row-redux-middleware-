const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchDataMiddlewre } = require("./middleware");

// inisital state
const inisitalState = {
    todo: []
}

// reducer
const todoReducer = (state = inisitalState, aciton) => {
    switch (aciton.type) {
        case "todo/added":
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {title: aciton.payload}
                ]
            }

        case "todo/loaded":
            return {
                ...state,
                todo: aciton.payload
            }

            return state;
    }

}


// create store 
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware ,fetchDataMiddlewre));


// subscribe for state change which provider in react
store.subscribe(() => {
    console.log(store.getState())
    // getState =>  state value get for use getState()
});

// dispatch with value
//TODO: store.dispatch({
//     type: "todo/added",
//     payload: 'Learn Redux'
// })

// dispatch for fetch data from API
// just checing for fetch
store.dispatch({
    type: "todos/fetch"
})


