function isEnoughCapacity(products, containerSize) {
  // Загальна кількість товарів
  let totalQuantity = 0;

  // Ітеруємося по ключам об'єкта products
  for (let product in products) {
    // Додаємо кількість кожного товару до загальної кількості
    totalQuantity += products[product];
  }

  // Перевіряємо, чи загальна кількість товарів менша або дорівнює containerSize
  return totalQuantity <= containerSize;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
