const Value = document.querySelector('#counter');

decrement = () => {

    let number = parseInt(Value.innerText);
    number = number - 1;
    Value.innerText = number;

};

increment = () => {

    let number = parseInt(Value.innerText);
    number = number + 1;
    Value.innerText = number;

};