

let Guest_List :string[] = ['Imran khan', 'Nawaz sharef','Asif Ali Zardari']
;
// for(let i=0; i<Guest_List.lenght; i++){
//   console>log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our plEASure to invite you in our party.\n\nThank You!\n\n')
//}

let absent_Guest :string ='Imran khan';
let new_Guest :string  = 'Kamaran Tessori';
Guest_List[0] = new_Guest ;

//for(let i=0; i<Guest_List.length; i++){
   // console.log('Dear Mr>. ' + Guest_List [i] + ',\n\nIt is Our pleasure to invite  you in our party.\n\nThank You!\n\n')
 //}

// console.log( `Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! we find Big Table so we are inviting 3 more guests.')

// array me 3 guest add kiya hain.
Guest_List.unshift('sir ziA khan') ;
Guest_List.splice(2 , 0 , 'Maryum Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// Yahan per mene 6 guest ke array ko print karaya he.
// for(let i=0; i<Guest_List.length; i++){
      // console.log('Dear Mr>. ' + Guest_List [i] + ',\n\nIt is Our pleasure to invite  you in our party.\n\nThank You!\n\n')
// }
//Sorry  Message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only Two peoples will be invite.');

// Yaha per mene guest remove kiya hain.
while(Guest_List.length > 2){
let remove_Guest = Guest_List.pop();
// console.log( `sorry Mr. ${remove_Guest}, you are not invite for Dinner.`);
// }

// Hamare bache howe 2 invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou Are still invited.\n\nThank You\n\n')

// }


// mene sare guest array se remove ker diya.
Guest_List.splice(0, 2);
console.log(Guest_List);

//Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${Guest_List.length}`);

