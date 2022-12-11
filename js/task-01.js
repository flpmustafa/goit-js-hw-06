const numCategories = document.querySelector('#categories').childElementCount;
console.log(`Number of categories:`, numCategories);
console.log('');

const nameOneCategory = document.querySelectorAll('h2');
console.log(`Category:`, nameOneCategory[0].outerText);

const numOneCategory = document.querySelectorAll('ul'); 
console.log(`Elements:`,numOneCategory[1].childElementCount);
console.log('');

const nameTwoCategory = document.querySelectorAll('h2');
console.log(`Category:`, nameOneCategory[1].outerText);

const numTwoCategory = document.querySelectorAll('ul'); 
console.log(`Elements:`,numOneCategory[2].childElementCount);
console.log('');

const nameThreeCategory = document.querySelectorAll('h2');
console.log(`Category:`, nameOneCategory[2].outerText);

const numThreeCategory = document.querySelectorAll('ul'); 
console.log(`Elements:`,numOneCategory[3].childElementCount);