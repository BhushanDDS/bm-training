// const myfunction = () => {

//     let counter = 0;
//     return {
//         add: () => { counter += 1; },
//         reset: () => {
//             counter = 0;
//         }
//     }
// }

const myfunction = () => {

    let counter = 0;
    const add = () => {
        counter++;
    }

    const rem = () => {
        counter = 0;
    }

    return { counter, rem }

}




const add = myfunction();
const rem = myfunction();

// add.add();
//add.rem();