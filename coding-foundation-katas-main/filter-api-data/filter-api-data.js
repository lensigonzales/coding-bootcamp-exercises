function filterApiData(apiData, mandatoryKeys) {
  const result = [];
  for (let object of apiData) {
    if (mandatoryKeys.every((key) => Object.keys(object).includes(key))) {
      result.push(object);
    }
  }
  return result;
}

//every key in mandatoryKeys durchlaufen und checken ob apiData diese keys includen

const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]

const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData2 = filterApiData(data2, ["id", "price"]);

console.log(filteredData2); // [{ id: 1, price: 100 }, { id:3, price: 50}]
