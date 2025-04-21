let Computer; let result; let Me;
let score=JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0};
    UPDATE();
function function1(){
const randomNum=Math.random();
if (randomNum>=0 && randomNum <1/3){
Computer='Rock';
} 
else if(randomNum>=1/3 && randomNum < 2/3){
Computer='Paper';
}
else{
Computer='Scissors';
}
}
function function2(me){
Me = me;
if (me == 'Scissors'){
    function1();
if(Computer=='Scissors'){
result = 'Tie.';
score.Ties+=1;
}else if(Computer=='Rock'){
result ='You lose.';
score.Loses+=1;
}else{
result ='You win.';
score.Wins+=1;
}
UPDATE();
results();
}else if(me == 'Paper'){
    function1();
if(Computer=='Paper'){
result = 'Tie.';
score.Ties+=1;
}else if(Computer=='Rock'){
result='You win.';
score.Wins+=1;
}else{
result='You lose.';
score.Loses+=1;
}
UPDATE();
results();
}
else{
    function1();
if(Computer=='Rock'){
result = 'Tie.';
score.Ties+=1;
}else if(Computer=='Paper'){
result='You lose.';
score.Loses+=1;
}else{
result='You win.';
score.Wins+=1;
}
UPDATE();
results(); 
}
localStorage.setItem('score',JSON.stringify(score));
}
function UPDATE(){
document.querySelector('.js-score').innerHTML = 'Wins: ' + score.Wins + ', ' + 'Loses: ' + score.Loses + ', ' + 'Ties: ' + score.Ties;
}
function results(){
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `You <img src="${Me}-emoji.png" class="move-icon">
<img src="${Computer}-emoji.png" class="move-icon"> Computer`;
}
function autoplay(){
    setInterval(function(){
        const player()
    }, 1000);
}