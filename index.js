
//     addition
function addition (){
     // store inputs
     const firstNum = document.getElementById('first-num').value;
     const secondNum = document.getElementById('second-num').value;
    
    if(firstNum === '' || secondNum === ''){
        alert('Please enter both numbers');
    }else{
        const result =  Number(firstNum) + Number(secondNum);
          //displaying result
          document.getElementById('p-output').innerHTML = 'The addition of the two given numbers are : ';
          //displaying result
          document.getElementById('result').style.display = 'block';
          document.getElementById('output').innerHTML = result;

    }

}

// subtraction
function subtraction() {
      // store inputs
      const firstNum = document.getElementById('first-num').value;
      const secondNum = document.getElementById('second-num').value;
    if(firstNum === '' || secondNum === ''){
        alert('Please enter both numbers');
    }else{
        const result =  Number(firstNum) - Number(secondNum);
        document.getElementById('p-output').innerHTML = 'The subtraction of the two given numbers are : ';
        //displaying result
        document.getElementById('result').style.display = 'block';
        document.getElementById('output').innerHTML = result;

    }
}


// multiplictaion 
function multiplictaion() {
    // store inputs
    const firstNum = document.getElementById('first-num').value;
    const secondNum = document.getElementById('second-num').value;
  if(firstNum === '' || secondNum === ''){
      alert('Please enter both numbers');
  }else{
      const result =  Number(firstNum) * Number(secondNum);
      document.getElementById('p-output').innerHTML = 'The multiplication of the two given numbers are : ';
        //displaying result
        document.getElementById('result').style.display = 'block';
        document.getElementById('output').innerHTML = result;

  }
}



// division
function division() {
    // store inputs
    const firstNum = document.getElementById('first-num').value;
    const secondNum = document.getElementById('second-num').value;
  if(firstNum === '' || secondNum === ''){
      alert('Please enter both numbers');
  }else{
      const result =  Number(firstNum) / Number(secondNum);
      document.getElementById('p-output').innerHTML = 'The division of the two given numbers are : ';
      //displaying result
      document.getElementById('result').style.display = 'block';
      document.getElementById('output').innerHTML = result;

  }
}


// hide result
document.getElementById('result').style.display = 'none';

//calling functions
document.getElementById('add').onclick = function() { addition(); };
document.getElementById('sub').onclick = function() { subtraction(); };
document.getElementById('mul').onclick = function() { multiplictaion(); };
document.getElementById('div').onclick = function() { division(); };