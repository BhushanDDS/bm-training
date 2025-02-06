const experimentalArray = [];
const itrvl = setInterval(() => {
    const data = new Date();
    console.log(data);
    experimentalArray.push(data);

}, 1000)

//clearing out 
//clearInterval(itrvl);

/*
output 
note : monitored the heap structure from devTools

PS C:\Users\bhushan\Desktop\BM\bm-training\Assighnment_4\task3> node .\script.js
2025-02-06T11:11:10.845Z
2025-02-06T11:11:11.858Z
2025-02-06T11:11:12.870Z
2025-02-06T11:11:13.876Z
2025-02-06T11:11:15.776Z
2025-02-06T11:11:16.783Z

*/