

let Guest_List :string[] = ['Imran khan', 'Nawaz sharef','Zardari'];

for(let i=0; i<Guest_List.length; i++){


console.log('Dear Mr> ' + Guest_List[i] + ',\n\nIt is Our pleasure to invite  you  in our party. \n\nThank You!')

}
let absent_Guest :string ='Imran khan';

let new_Guest :string  = 'Kamaran Tessori';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){


    console.log('Dear Mr> ' +Guest_List[i] + ',\n\nIt is Our pleasure to invite  you  in our party. \n\nThank You!')
}

console.log( `Mr. ${absent_Guest} is not coming to the party.`)



