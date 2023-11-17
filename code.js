fetch(`http://hp-api.herokuapp.com/api/characters/house/Gryffindor`).then((data)=>{
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
        box.innerHTML = `<h2>${data[i].name}</h2>
                        <img src="${data[i].image}"></img>
                        <div class="info">
                            <p>Gender:- ${data[i].gender}</p>
                            <p>House:- ${data[i].house}</p>
                            <p>DateOfBirth:- ${data[i].dateOfBirth}</p>
                        </div>`