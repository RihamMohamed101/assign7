
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let x = 1;

for(let i =0 ; i< friends.length ; i++)
{
    if(isNaN(parseInt(friends[i])) && friends[i][0]!='A')
        console.log(`"${x} => ${friends[i]}"`);
    else   continue;
    x++;
}