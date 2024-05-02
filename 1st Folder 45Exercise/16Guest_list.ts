

let Guest_List :string[] = ['Imran khan', 'Nawaz sharef','Asif Ali Zardari']
;
// for(let i=0; i<Guest_List.lenght; i++){

//   console>log('Dear Mr. ' + Guest_List [i] + ',\n\nIt is our plEASure to invite you in our party.\n\nThank You!\n\n')

//}

let absent_Guest :string ='Imran khan';

let new_Guest :string  = 'Kamaran Tessori';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr>. ' + Guest_List [i] + ',\n\nIt is Our pleasure to invite  you in our party.\n\nThank You!\n\n')

 }

console.log( `Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! we find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('sir ziA khan') ;
Guest_List.splice(2 , 0 , 'Maryum Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');


for(let i=0; i<Guest_List.length; i++){

      console.log('Dear Mr>. ' + Guest_List [i] + ',\n\nIt is Our pleasure to invite  you in our party.\n\nThank You!\n\n')

}
    


