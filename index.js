//Task 1
//Declaring the variables
let a = 3;
let b = 5;
let c;

//Printing the content on the alert box
let output = 'let a = 3;\nlet b = 5;\nlet c;\n----------\n';

output = output + '\na + b ='+ (a + b);
       
output = output + '\na - b = ' + (a - b);
        
output = output + '\na * b = ' +  + (a * b);

output = output + '\na / b = ' +  + (a / b);

output = output + '\na % b = ' + (a % b); 

output = output + '\na += b = ' + (a += b);
        
output = output + '\na -= b = ' + (a -= b);
        
output = output + '\na *= b = ' + (a *= b);
        
output = output + '\na /= b = ' + (a /= b);
        
output = output + '\na %= b = ' + (a %= b);
        
output = output + '\na == b : ' + (a == b);

output = output + '\na != b : ' + (a != b);
        
output = output + '\na > b : ' + (a > b);
        
output = output + '\na < b : ' + (a < b);
        
output = output + '\n!a && !c : ' + (!a && !c);
        
output = output + '\n!a || !c  : ' + (!a || !c);

alert(output);

//Task 2

//Declare the variable first_name and assign it with the value of your first name;
let first_name = 'Priti';
//Declare the variable last_name and assign it with the value of your last name;
let last_name = 'Samuel';

//Declare the variable email and assign it with the value of your email;
let email = 'samu0062@algonquinlive.com';

//Declare the variable output;
let output1;

//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: 
//"My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
output1=`My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

//Print the output in JavaScript console
console.log(output1);