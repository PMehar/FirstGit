
//Examin the document
//console.dir(document);
/*console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);*/

//getelementbyid
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
var hea=document.getElementById('main-header');
/*console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>'*/

hea.style.borderBottom='solid 3px #000';

//getElements by class name
document.getElementsByClassName("title");
var h2= document.getElementsByClassName('title');


console.log(h2[0].textContent);
h2[0].style.fontWeight='bold';
h2[0].style.color='green';















