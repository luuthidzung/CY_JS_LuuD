
const prompt = require('prompt-sync')();
function transformCarArray(arr) {
    const groupedByBrand = arr.reduce((acc, car) => {
        if (!acc[car.brand]) {
            acc[car.brand] = [];
        }
        acc[car.brand].push({ brand: car.brand, model: car.model });
        return acc;
    }, {});

    const result = Object.values(groupedByBrand).map(brandGroup => brandGroup);

    return result;
}

const arr = [
    { brand: 'Huyndai', model: 'Santafe' },
    { brand: 'Huyndai', model: 'Sonata' },
    { brand: 'Vinfast', model: 'Lux SA' },
    { brand: 'Toyota', model: 'Camry' },
    { brand: 'Vinfast', model: 'Lux A' },
    { brand: 'Toyota', model: 'Vios' }
];

const transformedArr = transformCarArray(arr);
console.log(JSON.stringify(transformedArr, null, 2));