


let age =18;
if(age==18)
{
    console.log("u can drive");
}
let a1=18;

if(a1==18)
{
    console.log("u can vote the mp elections");

}
else
{
    console.log("u cannot vote because u are under 18 age");
}

let res=90;
if(res>100)
{
    console.log("u are promoted for next round");
}
else if(res>85)

    {
        console.log("u are promoted after next 3 rounds");

    }
    else
    {
        console.log("your not aligible for the interview");
    }
let age1 =18;
(age1==18)? console.log("you can drive it"):console.log("you cannot drive it");









let a=0;
console.log(a);
console.log(a+1);
console.log(a+2);
console.log(a+3);
console.log(a+4);
console.log(a+5);

for(a=0;a<10;a++)
{
    console.log("the ittration is "+a);
}

while(a<10)
{
    console.log("the ittration is are "+a);
    a++;
}

do
{
    console.log("the ittrations king is"+a )
    a++;
}while(a<10);


let day =3;
switch(day)
{
    case 1:console.log("monday");
    break;
    case 2:console.log("tuesday");
    break;
    case 3:console.log("wenesday");
    break;
    case 4:console.log("thursday");
    break;
    default:console.log("holiday");
}

let users={
    name:"mallu bhai",
    age:19,

}
for(let key in users)
{
    console.log(users[key]);
}
let array=["mallu bhai","ningu bhai","best friend  mallu"];
for(let key in array)
{
    console.log(array);
}


const value=["software", "hardware","civil", "ai"];
for(let va of value)
{
    console.log(va);
}
// 2)for an string
const string="89"
for(let c of string)
{
    console.log(c);
}
// 3) for object
const king={
    name :virat,
    brith:dheli
}
for (let k of king)
{
  console.log(k);
}
const user = { name: "Alex", age: 25 };

for (let values of Object.values(user)) {
  console.log(values);
}
// berakstaemnt
for(let i =0; i<10; i++)
{
    if(i==6)
   break;
console.log(i);
}
// continuestatement
for(let i =1;i<10;i++)
{
    if(i==8)
    continue;
    console.log(i);
}