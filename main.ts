#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let pinCode = 12345;

let pinAnswer = await inquirer.prompt
([
  {
      name: "pin",
      message: "enter your pin",
      type: "number",
  },
]);

if (pinAnswer.pin === pinCode) 
{
   console.log("Correct pin code!");

   let operationAns = await inquirer.prompt
  ([
       {
         name: "operation",
         message: "Please Select An Option",
         type: "list",
         choices: ["Withdraw", "Fast Cash", "Check Balance"],
       },

    ]);

    if (operationAns.operation === "Check Balance"){
        
        console.log(`Your current balance is ${myBalance}`)
    }

 else if (operationAns.operation === "Withdraw") 
    {
    
     let amountAns = await inquirer.prompt
       ([
         {
        
            name: "amount",
            message: "Enter the amount you want to withdraw",
            type: "number"
        } 
        ]);

       if (amountAns.amount > myBalance){console.log("Insufficient Balance");}

       else{

       myBalance -= amountAns.amount,

       console.log(`Your remaining balance is: ${myBalance}`);}
    } 


  else if (operationAns.operation === "Fast Cash") 
  {
    
    let cashOption = await inquirer.prompt
    ([
    
        {
        
         name: "fast",
         message: "Choose the amount you want to withdraw",
         type: "list",
         choices: ["1000" , "2000" , "3000" , "4000", "5000"]
        }
    
    ])



    if (cashOption.fast === "1000")
     { 
        myBalance -= 1000
        
        console.log("Your remaining balance is " + myBalance);
     
    }else if (cashOption.fast === "2000")
    { 
        myBalance -= 2000
       
        console.log("Your remaining balance is " + myBalance);
  
    }else if (cashOption.fast === "3000")
  
    { 
    
      myBalance -= 3000
    
     console.log("Your remaining balance is " + myBalance);
   
    }else if (cashOption.fast === "4000")
  
    {
         myBalance -= 4000
     
         console.log("Your remaining balance is " + myBalance);
 
    }else if (cashOption.fast === "5000")
 { 
    
     myBalance -= 5000
   
     console.log("Your remaining balance is " + myBalance);
}




  }
}


else 

  {console.log("Incorrect pin code!")
}


