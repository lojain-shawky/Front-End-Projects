let todo=[];
function loop(){
  let html='';
  for(i=0;i<todo.length;i++){
    let thtml=`<div> ${todo[i].name} </div> <div>${todo[i].date} </div>
    <button class="delete" onclick="
    todo.splice(${i},1)
    loop();
    ">Delete</button>`;
    html+=thtml;
  }
  document.querySelector('.js-todo').innerHTML=html;
}
function addtodo(){
  let input = document.querySelector('.js-input') ;
  let name=input.value;
  let dd=document.querySelector('.js-date');
  let date=dd.value;
todo.push({name,date});
document.querySelector('.js-input').value = '';
dd.value='';
loop();
} 