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


module.exports = {delayActionMiddleware}