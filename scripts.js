// პირველი
function sum(...numbers) {
  let plus = 0;
    for (let item of numbers) {
        if (item > 0) {
            plus += item;
        }
    }
return plus;
  }
let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// მეორე

function sum1 (...numbers){
    let sum2 = 0;
    for(i=0; i<numbers.length; i++)
    // for( let i of numbers)
    {   sum2 +=numbers[i]
    }
    return sum2
}
let result1 = sum1(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result1);

//მესამე

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  let y = (isloggedin) => {
    if (isloggedin == 'true') {
        return user.firstname + " " + user.lastname ;
    }
    // else{ isloggedin == 'false'}
    return false;
  }

  let result3 = y ('true');
    console.log(result3);

    // მეოთხე
    let testFunction = (...numbers) =>{
        return Math.max(...numbers)
    }

    let testResult = testFunction(1,2,5,7,8,10,12,13,643)
    console.log(testResult);

    //მეხუთე

    let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
    for(z of array) {
        if (z.length > 4 && z.includes("av")  )   {
            console.log(z);
    }
}

let array1 = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for(m=0 ; m < array1.length; m++)
{
    if (array1[m].length > 4 && array1[m].includes("av")  )   {
        console.log(array1[m]);
    }
}



let array2 = ['html', 'css', 'python', 'javascript', 'bootstrap'];

array2.forEach(function(z) {
    if (z.length > 4 && z.includes("av")  )
    {
        console.log(z);
    }
}
)
