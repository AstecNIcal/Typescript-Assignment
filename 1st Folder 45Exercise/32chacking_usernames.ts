
let current_users: string[] = ['zIa','zeEshan','muStafa','Farhan','Sohail'];

let new_users: string[] = ['Bilal','zIa','Dawood','muStafa','Farhan'];
new_users.forEach(newUsername => {
let lowerCase: string = newUsername.toLowerCase();
if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${newUsername} is not available. please write a diffrent username`);

}
else{
console.log( `The username ${newUsername} is avaliable.`);

}

})



























