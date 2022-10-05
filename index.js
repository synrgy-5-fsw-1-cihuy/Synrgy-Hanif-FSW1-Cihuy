// if
const ageSample = 29;

if(ageSample < 30) {
    console.info("Age too young");
} else if(ageSample == 30){
    console.info("Age fit");
} else {
    console.info("Age too old");
}

// switch case
switch (true) {
    case (ageSample < 30) :
        console.log("Age too young");
        break;

    case (ageSample==30):
        console.log("Age fit");    
        break;

    default:
        console.log("Age too old");
        break;
};

const parent = {
    name: "Andrew",
    address: "California",
    age: 30,
    postal_code: 55578
};

switch (true) {
    case parent.address == "California":
        console.log("United State of America");
        break;

    case parent.age > 35:
        console.log("Umurnya sudah bapak bapak");
        break;

    case parent.age < 35:
        console.log("Umurnya masih remaja");
        break;
        
    default:
        console.log("Bukan America");
        break;
}

if(parent.address == "California") {
    console.log("United State of America");
} else {
    console.log("Bukan America");
}

if(parent.age > 35) {
    console.log("Umurnya sudah bapak bapak");
} else {
    console.log("Umurnya masih remaja");
}