function digitalHouse(a,b) {
    for (let i = 1; i < 101; i++){
        if (i % a == 0 && i % b == 0) {
            console.log("Digital House");
        }
        else if (i % a == 0){
            console.log("Digital");
        }
        else if (i % b == 0) {
            console.log("House");
        }
        else console.log(i);
    }
}

digitalHouse(0,0);