const container = document.querySelector('.container');
//create row divs

for(let i = 0; i < 16; i++){
    const divRow= document.createElement('div');
    divRow.classList.add('row');
    container.appendChild(divRow);

    //create column divs

    for(let k = 0; k < 16; k++){
        const divCol= document.createElement('div');
        divCol.classList.add('col');
        divRow.appendChild(divCol)
    }

}
console.log(container);



