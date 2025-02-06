const producObj = [{
        name: 'soap',
        price: '100',
        categorie: 'home'

    },
    {
        name: 'screwdriver',
        price: '200',
        categorie: 'Electronics'

    }, {
        name: 'knife',
        price: '400',
        categorie: 'hotel'

    }, {
        name: 'wire',
        price: '20',
        categorie: 'Electronics'

    },
]
const namesInUpperCase =
    producObj.map(val => {
        return val.name.toUpperCase();
    })
    // console.log(namesInUpperCase);

const resFilterElectronics = producObj.filter((val) => {
        return val.categorie === 'Electronics'

    })
    // console.log(resFilterElectronics);

const calculateTotalPriceByReduce = producObj.reduce((acc, val) => {

    return acc + val.price, 0;
})
console.log(calculateTotalPriceByReduce);


const totalPriceByCategory = producObj.map((val) => val).filter((val => val.categorie = 'Electronics')).reduce((acc, val) => acc + val.price, 0)
console.log(totalPriceByCategory);