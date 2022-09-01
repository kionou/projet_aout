let dates = document.querySelectorAll('.date')
console.log('gxfhgf',dates);
dates.forEach(date =>{
    console.log(date.innerHTML);
  });

function convertirDate(a) {
    let date = document.querySelectorAll('.date')
    let dateLocale = new Date(a).toLocaleString('fr-FR',{
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric',
      });
      console.log('dakrte',dateLocale);
       date.forEach(element => {
       element.innerHTML = dateLocale
   
       });
   }


//    let texte = document.querySelectorAll('#text')
// console.log(texte);
// texte.forEach(text =>{
//   truncateString(text.innerHTML,30,text)
// });
// function truncateString(str,num,el) {
//   if (str.length <= num) {
//     return el.innerHTML =str;
//   } else {
//     return el.innerHTML = str.slice(0,num).concat('...')
//   }
// }
//    convertirDate(date)