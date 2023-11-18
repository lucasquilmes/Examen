fetch(`https://wizard-world-api.herokuapp.com/wizards `).then((data)=>{
    let info = data.json();
    return info;
}).then((data)=>{
    displaydata(data);
})


function displaydata(data){
    console.log(data);
    var main = document.querySelector(".main");
    for(var i = 0;i<data.length;i++){
        console.log(data[i]);
        let box = document.createElement("div");
        box.setAttribute("class","box");
        let content =document.getElementById("content");

        main.appendChild(box);
        box.innerHTML = `<h2>${data[i].firstName} ${data[i].lastName}</h2>`
                  
        for(var j = 0;j<data[i].elixirs.length;j++){
            console.log(j)
            let slice = document.createElement("div");
            slice.setAttribute("class","slice");
            box.appendChild(slice);
            slice.innerHTML = `<p>${data[i].elixirs[j].name} <p> `
        }
    }    
}

