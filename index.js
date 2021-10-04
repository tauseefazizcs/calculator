function addition (){
    
    if(firstNum === '' || secondNum === ''){
        alert('Please enter both numbers');
    }else{
        const result = firstNum + secondNum;
    }

}

const firstNum = document.getElementById('first-num');
const secondNum = document.getElementById('second-num');
const add = document.getElementById('add').onclick = function() { addition(); };