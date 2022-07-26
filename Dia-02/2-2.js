let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
  ];

  const idSet =  (products) =>  {
    newProduct = products.map((product, id) => {
      product.id = id+1;
        return product
  });
  return newProduct
}

const printAll = (products) => {
  products.forEach(product => {
    console.log(product.name);
  });
}

const printId3 = (products) => {
  const text = products.find((product) => product.id === 3);
  console.log(text);
}

const printAllBlack = (products) => {
  products.forEach((product) => {
  if (product.colors.includes('black'))console.log(product.name);
  });
}

const printAllColors = (products) => {
  products.forEach((product) => {
  if (product.colors.length === 0)console.log(product.name);
  });
}


const addProduct = (products, newProduct) => {
  products.push(newProduct);
}

const removeStockLess = (products) => {
 const newArray = products.filter((product) => { product.quantity >= 0})
return newArray; 
}

const sumAll = (products) => {
  let quantity = 0; 
  products.forEach((product) => {
    quantity += product.quantity; 
  })
  console.log(quantity);
}

sumAll(products);

const upperValue = (products,value) => {
  products.forEach((product) => {
    if (product.value >= value ) console.log(product.name);
  } )
}

const onlyO = (products) => {
  products.forEach((product) => {
    if (product.name.includes('o') ) console.log(product.name);
  } )
}