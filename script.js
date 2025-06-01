const gridContainer = document.querySelector('.grid-container');

const arr = [
  ['aa','ab','ac'],
  ['ba','bb','bc'],
  ['ca','cb','cc'],
  ['aa','bb','cc'],
  ['ac','bb','ca'],
  ['aa','ba','ca'],
  ['ab','bb','cb'],
  ['ac','bc','cc']
];

const gridItems = document.querySelectorAll('.gridItem');

let circleArray = [];
let crossArray = [];
let winArray = [];
let clickCount = 0;

const checking = (circleOrCrossArray,subArray) =>{
  const flag =  subArray.every((eachItem) => circleOrCrossArray.includes(eachItem));
  if(flag === true)
    winArray = subArray;
  return flag;
}

const check = (circleOrCrossArray)=>{
  return arr.some((each) => checking(circleOrCrossArray,each));
}

const handleClick = (event) =>{
  let id = event.target.id
  let div = document.getElementById(id);
  let position = div.classList[1];
  if(clickCount%2 == 0){
    div.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
    crossArray.push(position);
    if(crossArray.length >= 3 && check(crossArray))
    {
      console.log('Cross wins');
      foo('X');
      return;
    }
  }
  else{
    div.innerHTML = '<i class="fa-regular fa-circle"></i>';
    circleArray.push(position);
    if(crossArray.length >= 3 && check(circleArray))
    {
      console.log('Circle wins');
      foo('O');
      return;
    }
  }
  clickCount++;
}

function foo (win){
  coloringGridItem();
  const dialog = document.querySelector('dialog');
  dialog.innerHTML = `<h1>${win} Wins!!</h1>`;
  gridItems.forEach(item=>{
    item.removeEventListener('click',handleClick);
  })
}

function coloringGridItem(){
  winArray.forEach(item=>{
    Array.from(document.getElementsByClassName(item))[0].style.backgroundColor='lightgreen';
  })
}

gridItems.forEach(item=>{
  item.addEventListener('click',handleClick);
  
})


const button = document.querySelector('#reset')

button.addEventListener('click',()=>{
    window.location.reload();
  })

dialog.show();
