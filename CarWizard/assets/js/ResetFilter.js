function ResetFilter() {
  // Filter the NodeList based on the user's inputs
  const productCards = document.querySelectorAll('.product-item');
  
  productCards.forEach(card => {
    const cardClasses = card.classList;
      card.style.display = 'block';
      console.log("block");
    })

    const makeSelect = document.getElementById('make');
    makeSelect.value = 'Make';
  
    const priceSelect = document.getElementById('price');
    priceSelect.value = 'Price';
  
    const yearSelect = document.getElementById('year');
    yearSelect.value = 'Year';
}




