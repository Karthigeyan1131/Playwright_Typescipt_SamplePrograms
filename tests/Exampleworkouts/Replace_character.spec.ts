let str = 'Karthik'
let char =''
let res=''
for(let i=0;i<str.length;i++)
{
    char = str.charAt(i)
    if(char == 'i')
    {
        char = 'c'
    }
    res = res+ char
}
console.log(str.replace('i','c'))
console.log(res);