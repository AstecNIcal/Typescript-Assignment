
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 

//  Make alarge shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string = 'large', text:string = 'I love TypeScript.'){


console.log(`creating a ${size} shirt with the message: ${text}`);


}

make_shirt();

make_shirt('Medium');


make_shirt('small','I love python');





