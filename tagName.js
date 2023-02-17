//getElementsByClassName
/*var items= document.getElementsByClassName('list-group-item');

//console.log(items);
items[2].style.backgroundColor='green';

for(var i =0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}*/

//getElementsByTagName
var li= document.getElementsByTagName('li');

console.log(li);
li[2].style.backgroundColor='green';
li[4].style.backgroundColor='pink';

for(var i =0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
