//let hours = now.gethours();
let hours = 17;
if(hours < 12)
{
    console.log("Good Morning");
}
else if(hours > 12 || hours < 16)
{
    console.log("Good Afternoon");  
}
else if(hours < 21)
{
    console.log("Good Evening");
}
else
{
   console.log("Good Night , You Better Go Sleep");  
}