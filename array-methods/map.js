const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceAndSalesPrice = prices.map((originalPrice) => {
  return {
    price: originalPrice,
    salesPrice: originalPrice / 2,
  };
});

const formattedPrices = prices.map((originalPrice) => {
  return originalPrice.toFixed(2);
});

console.log('Price objects ', priceAndSalesPrice);
console.log('Formatted prices ', formattedPrices);
