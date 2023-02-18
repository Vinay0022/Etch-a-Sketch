const container = document.querySelector('.container');
let Squares;
const btn = document.querySelector('button');

for (let index = 0; index < 16*16; index++) {
Squares = document.createElement('div');
   Squares.classList.add('squares'); 
  Squares.style='width:35.5px; height:35.5px;'; 
container.appendChild(Squares);
}

btn.addEventListener('click',()=>{
                    
let grid= prompt('Enter the grid :' )
let num = parseInt(grid);
    let swidth = 600/num-2;
    let sheight= 600/num-2;
if(num>99){ 
    alert("Please Enter No. less than 100"); 
return ;
}

 while (container.hasChildNodes())
               container.removeChild(container.firstChild)

for (let index = 0; index < num*num; index++) {
Squares = document.createElement('div');
   Squares.classList.add('squares'); 
    console.log(swidth);
  Squares.style=`width:${swidth}px; height:${sheight}px;`; 
container.appendChild(Squares);
}

});



