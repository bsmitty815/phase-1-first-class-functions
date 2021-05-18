function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const name = function anyPlace() {};
    return name;
}

function returnsAnAnonymousFunction() {

    return function() {
        console.log('hi');   

        return;
    }

}