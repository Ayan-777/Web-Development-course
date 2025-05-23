// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 2000);
//     });

// }


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


async function getdata() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')


    let x =await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let data = await x.json();
    return data
}

async function main() {
    console.log("Loding data...");

    console.log("Do something else")

    console.log("Load data")
    let data = await getdata();

    console.log(data);
    console.log("Data loaded")
    console.log("task2")
}
main();



// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })