const fecthData = new Promise((res, rej) => {
    try {
        setTimeout(() => {
            res(['name1', 'name2', 'name3', 'name4'])

        }, 2000)

    } catch (error) {
        rej('errorlol')
    }
})

fecthData.then(data => {
    console.log(data);
}).catch(err => console.log(err))

const consumePromice = async() => {
    try {
        let res = await fecthData;
        console.log(res);

    } catch (err) {
        console.log(err);
    }
}
consumePromice();