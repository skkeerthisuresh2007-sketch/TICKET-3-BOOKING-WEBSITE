let vehicles = [
 {id:1,type:"bus",name:"Super Bus",price:500,img:"images/bus.png"},
 {id:2,type:"bus",name:"Express Bus",price:600,img:"images/bus2.png"},

 {id:3,type:"train",name:"Superfast Train",price:800,img:"images/train.png"},
 {id:4,type:"train",name:"Express Train",price:900,img:"images/train2.png"},

 {id:5,type:"flight",name:"Air India",price:3000,img:"images/flight2.png"},
 {id:6,type:"flight",name:"IndiGo",price:3500,img:"images/flight.png"}
];

document.getElementById("ticketForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let type = document.getElementById("transportType").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let seats = parseInt(document.getElementById("seats").value);

    let list = document.getElementById("vehicleList");
    list.innerHTML = "";

    
    let result = vehicles.filter(v => v.type == type);

    result.forEach(v=>{
        list.innerHTML += `
        <div>
            <img src="${v.img}" width="120">
            <h3>${v.name}</h3>
            <p>${from} → ${to}</p>
            <p>Price: ₹${v.price}</p>
            <button onclick="goSeat(${v.id}, '${from}', '${to}', ${seats})">Book</button>
        </div>
        `;
    });
});

function goSeat(id, from, to, seats){
    // 👉 Data store pannuvom (ticket page use panna)
    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("seats", seats);

    window.location.href = "seat.html";
}