const { createStore } = require("redux");

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
                todo: [
                    ...state.todo,
                    {title: aciton.payload}
                ]
            }

            return state;
    }

}


// create store 
const store = createStore(todoReducer);


// subscribe for state change which provider in react
store.subscribe(() => {
    console.log(store.getState())
    // getState =>  state value get for use getState()
});

// dispatch with value
store.dispatch({
    type: "todo/added",
    payload: 'Learn redux'
})
