const container = document.querySelector('.container');
const gridNum = document.querySelector('#gridNum');


const btnSmall = document.querySelector('#gridAdd');


gridNum.textContent = digi;


function clearGrid(){
  container.querySelectorAll('*').forEach(n => n.remove());
}

function getNum(e){
  x = parseInt(e);
  
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
    }

}

}
