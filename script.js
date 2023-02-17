const container = document.querySelector('.container');
let Squares;
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    
let grid= prompt('Enter the grid :' )
let num = parseInt(grid);
     
if(num>99){ 
    alert("Please Enter No. less than 100"); 
return ;
}

for (let index = 0; index < num*num; index++) {
Squares = document.createElement('div');
   Squares.classList.add('squares'); 
container.appendChild(Squares);
}

});



