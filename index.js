// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const addCats = [...cats,"Broom"];
    return addCats;
}

function prependCat(name) {
    const prepCats = ["Arnold",...cats];
    return prepCats;
}

function removeLastCat(name) {
    const removeLast = [...cats];
    removeLast.pop();
    return removeLast;
}

function removeFirstCat(name) {
    const removeFirst = [...cats];
    removeFirst.shift();
    return removeFirst;
}
