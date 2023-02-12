const Car = {
    brand:"Suzuki",
    color:"white",
    price:10000
  }

var json = JSON.stringify(Car);

console.log(json, typeof json);

var jsonparse = JSON.parse(json);

console.log(jsonparse, typeof jsonparse);