let string = 'Malayalam'
let rev=''
let ispalindrome = false
for(let i=0;i<string.length;i++)
{
    let char = string.charAt(i)
    rev =char+rev
}
if(string.toLowerCase() === rev.toLowerCase())
{
    ispalindrome = true
}

let result = ispalindrome ? "Palindrome":"Not a Palindrome"
console.log(rev);
console.log(result);