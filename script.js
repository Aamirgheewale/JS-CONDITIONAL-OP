let counterElement = document.getElementById('counterValue');

function onDecrement(){
    let previousValue = counterElement.textContent; 
    let updatedValue = parseInt(previousValue) - 1;
    counterElement.textContent = updatedValue;
}

function onReset(){
    
}

function onIncrement(){

}