// const accountId=123
// let accountEmail="Hriteshkuma@google.com"
// var accountPassword="12345"
// accountCity="kolkata";
// let accountState;


//     // accountId=2 //not allowed
//    // console.log(accountId);
 
 
// accountEmail="hc12@google"
// accountPassword="2121"
// accountCity="Kashmir"

// console.log(accountEmail);

// /*
// prefer not to use var because of issue in block scope and functional scope
// */

// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// function isPrime(num)
// {
//     if(num<=1)
//         return false;

//     for(let i=2;i<Math.sqrt(num);i++)
//     {
//         if(num%i==0)
//         {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(6));
// console.log(isPrime(10));


function isPalindrome(num) {
    if (num < 0) 
        {
        return false;
    }

    let originalNum = num;  // Store the original number
    let reverseNum = 0;

    while (num > 0) {
        const lastDigit = num % 10;  // Get the last digit
        reverseNum = reverseNum * 10 + lastDigit;  // Append last digit to reversed number
        num = Math.floor(num / 10);  // Remove the last digit
    }

    // Check if the reversed number is the same as the original
    return originalNum === reverseNum;  // Use === for comparison
}

console.log(isPalindrome(121));
