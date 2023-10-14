const container = document.querySelector('.container');
const gridNum = document.querySelector('#gridNum');
const div = document.querySelector('div');
const eraser = document.querySelector('#eraser');

const value_one = document.querySelector('.value-one');
const value_two = document.querySelector('.value-two');




function clearGrid(){
  container.querySelectorAll('*').forEach(n => n.remove());
}

function eraseGrid(){
  container.querySelectorAll('*').forEach(n => n.style.backgroundColor = "white");
  
}

function rubber(){
  container.querySelectorAll('*').forEach(n => n.querySelectorAll('*').forEach(m => m.style.backgroundColor = "white"));
  
}

let color = 'red';

function colorDiv(){
  if(color == "blue"){
    this.style.backgroundColor = 'blue';
  }else if(color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }else if(color == 'erase'){
    this.style.backgroundColor = 'white';
  }
}

function changeColor(c){
  color = c;
}




function getNum(e){
  let x = parseInt(e) || 16;
  value_one.textContent = e;
  value_two.textContent = e;
  clearGrid();
  //create row divs

  

  for(let i = 0; i < x; i++){

    const divRow= document.createElement('div');
    divRow.classList.add('row');
    container.appendChild(divRow);

    //create column divs

    for(let k = 0; k < x; k++){
        const divCol= document.createElement('div');
        divCol.classList.add('col');
        divRow.appendChild(divCol);
        
        divCol.addEventListener('mouseover', colorDiv);

    }

  }
  


}
