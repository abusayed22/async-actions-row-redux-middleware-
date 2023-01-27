const delayActionMiddleware = (store) => (next) => (aciton) => {
    if(aciton.type === "todo/added") {

        console.log('i am delaying you! for 2 sec')
        setTimeout(() => {
            next(aciton)
        }, 2000);

        // which the delay timeout func , if next(action) is called down next(action) 

        // so we can delay 
        return;

    }
    return next(aciton)
}

const fetchDataMiddlewre = (store) => (next) => async(action) => {
    if(action.type === "todos/fetch") {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const todos = await res.json()  
        
        store.dispatch({
            type: "todo/loaded",
            payload: todos
        })
        console.log(`Number of todos ${store.getState().todo.length}`)
        return 
    }
    return next(action);
}

module.exports = {delayActionMiddleware , fetchDataMiddlewre}