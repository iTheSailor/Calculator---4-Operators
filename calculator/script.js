var displayDiv = document.querySelector("#display")
let operation = []
function press(e){
    let x = displayDiv.textContent
    if (x == '0' && operation.length == 0){
        displayDiv.innerHTML= e
        operation.push('0')
    }else if (x !='0' && operation.length == 0){
        displayDiv.innerHTML= e
        operation.push('0')
    }else if (x == '0' && operation.length != 0) {
        displayDiv.innerHTML= e
    }else {
        displayDiv.innerHTML= x+e
    }
    return x
}
function setOP(e){
    operation.push(displayDiv.textContent)
    if (e == '+'){
        operation.push(e)        
    } if (e == '-'){
        operation.push(e)
    } if ( e == '*'){
        operation.push(e)
    } if (e == '/'){
        operation.push(e)
    }
    console.log(operation)
    displayDiv.innerText='0'
}
function calculate() {
    if (operation[0] == '0'){
        operation.shift()
    }
    operation.push(displayDiv.textContent)
    let result = eval(operation.join(''))
    console.log(result)
    if (result % 1 == 0) {
        displayDiv.innerText = result
    } else {
        displayDiv.innerText=parseFloat(result.toFixed(8))
    }
    operation =[]
    // console.log(operation)
}
function clr(){
    operation=[]
    displayDiv.innerText = '0'
}