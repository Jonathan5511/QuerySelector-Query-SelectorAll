// Write the code as shown in the video below:
const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign='right';
const fruits=document.querySelector('.fruits')
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';
const list = document.querySelectorAll('.fruit');
for(let i=0;i<list.length;i++)
  {
    list[i].style.backgroundColor='white';
    list[i].style.padding = '10px';
    list[i].style.margin = '10px';
    list[i].style.borderRadius = '5px';
  }
// Write answer to the questions asked below:
const heading = document.querySelector('#basket-heading');
heading.style.color = 'brown';
const odditems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<odditems.length;i++)
  {
    odditems[i].style.backgroundColor='brown';
    odditems[i].style.color='white';
  }