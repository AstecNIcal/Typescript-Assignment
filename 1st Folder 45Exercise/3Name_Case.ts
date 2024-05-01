let personName :string = '';

personName = prompt('what is your name?') || '';
 
let lowercase :string = personName.toLowerCase() ;
let uppercase :string = personName.toUpperCase();
let titlecase :string = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).tolowerCase()).join('')

if(personName !==null && personName !== ''){
 alert('Hello $(personName}, Here are you name in:
LowerCase:  ${lowercase}
UpperCase:  ${uppercase}
TitleCase:  ${titlecase}`)
}
else{
    alert('please fill your name !')
}