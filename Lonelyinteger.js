//Here we find lonely integer number

const arr = [8,8,10,10,10,11,11,100,55,55,88,77,88,77,];

//create a function

function lonelyinteger(myArr) {
    for(let i=0; i<=myArr.length; i++){

        let count = myArr.filter((currE) => currE === myArr[i]).length;
        if(count === 1) {
            console.log(myArr[i]);
            // return myArr[i];
        }
    }
}

lonelyinteger(arr);