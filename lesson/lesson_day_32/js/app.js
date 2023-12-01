/* 
function delayedHello()  {
    return new Promise((resolve) => {
            setTimeout(()=> {
                resolve('Hello,World');
            }, 2000);
    });        
}

delayedHello();

function isNumberEven(number) {
    return new Promise((resolve, reject) => {
        if(number % 2 == 0) {
            resolve('Number is even')
        } else  {
            reject('Number is odd')
        }
    })
}

isNumberEven(10)
.then((res)=> console.log(res))
.catch((err)=> console.error(err))

isNumberEven(11)
.then((res)=> console.log(res))
.catch((err)=> console.error(err))

isNumberEven(9)
.then((res)=> console.log(res))
.catch((err)=> console.error(err))

async function callMyFunction() {
    try {
    const res = await Promise;
    console.log(res);
    } catch(err) {
        console.error(err);
    }
}

callMyFunction(); */

async function addRandomNumber(number) {
    try {
        const randomNumber = Math.floor(Math.random()*10);
        const num = randomNumber + number;
        setTimeout(() => {
            console.log(num);
        }, 1000);
    } catch (err) {
        console.log(err);
    }
}


addRandomNumber(8);

async function getUserAndPosts(userId) {
    try {
        const userResponse = await fetch(`{https://jsonplaceholder.typicode.com/users/${userId}}`);
        const userJson = await userResponse.json();
        console.log(userJson);
    } catch (err) {
        console.error('ERRROR');
    }
}

getUserAndPosts(userId);

