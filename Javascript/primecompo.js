// This is Js code to find and count composite and prime numbers from 1 to 100
// Arrow function creation 
primecompo = () =>{  
    var x=0, y=1
    // For loop to generate numbers from 1 to 100 
    for(i=2;i<=100;i++){
        // for loop to check if a number is prime or composite
        for(j=2; j <= i; j++){
            if(i % j === 0){
                break
            }
        }
        if(i==j){
            console.log(i + ' is prime')
            x++
        }else{
            console.log(i + " is composite")
            y++
        }
    }
    console.log(y)
    console.log(x)
}

primecompo()