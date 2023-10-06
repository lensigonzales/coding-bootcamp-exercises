function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((object) =>
    mandatoryKeys.every((key) => object.hasOwnProperty(key))
  );
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

const filteredData2 = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
