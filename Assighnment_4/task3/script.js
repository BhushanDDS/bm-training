const experimentalArray = [];
setInterval(() => {
    const data = new Date();
    console.log(data);
    experimentalArray.push(data);
}, 1000)