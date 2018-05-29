function sayHello(){
    alert('Hello,Welcome!');
}



function sayThankyou(){
    alert('Thank you for submitting');
}



     function addition(){
    
               var number1 =  document.getElementById("number1").value; 
               var number2 =  document.getElementById("number2").value; 
               var sum =  document.getElementById("sum").value; 

                   sum = number1 + number2;

                 document.getElementById("sum").focus();
                 document.getElementById("sum").value=sum;
    
            }

