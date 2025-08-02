// evern 
// num % 2 === 0 // eta mane kono number k 2 diye divided korle remainder 0 hole ta even hoybe

// odd
// num % 2 === 1 // eta mne kono number k 2 diye divided korle remainder 1 hole ta odd hoye jabe
// num % 2 !== 0 /// evabei lekha jai ja bolche 2 diye vag korle jar remainder 0 na setai odd number 


// odd number show: 

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 1) {
//     console.log(`odd number`, i);
//   }

// }

// alternative way this 
// for (let i = 0; i < 20; i++) {
//   if (i % 2 !== 0) { //i%2!==0 er mane 2 dara divided man !0 hobe na 
//     console.log(`odd number given:`, i);
//   }
// }

// alternative way this
// for (let i = 1; i < 20; i += 2) {
//   console.log(i)
// }

// for(let i=1;i<30;i++){
//   if(i%5===0){
//     console.log(i);
//   }
// }

// for(let i=1;i<30;i++){
//   if(i%3===0 || i%5===0){ //3 ||(othoba) 5 diye jai result dekhaw 
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) { // 3 &(and) 5 donoty diye divided kora jai seita result dekhaw
//     console.log(i);
//   }
// }

// given the sum result with 1 to 30 also  that are divisible by 3 

let sum = 0;
for (i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(`odd number`, i);
    sum = sum + i;
    console.log(`sum`, sum);

  }
}
console.log(`odd num sum:`, sum);


