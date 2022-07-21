const calcularPreco = (produto, preco) => {
  const tax = ( 2000 > preco ? 300 : (4000 > preco?  450 : 700))   
  console.log( `O produto ${produto} custa ${preco},
  seu custo de envio é ${tax} portanto, seu valor final é ${tax+preco} `)
}
calcularPreco('Macbook', 2500);
calcularPreco('Celular', 500);
calcularPreco('Playstation', 4500);

