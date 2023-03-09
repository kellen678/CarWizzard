function getSelectedValuePrice() {
  const makeSelect = document.getElementById('make');
  const selectedMake = makeSelect.value;
  
  const priceSelect = document.getElementById('price');
  const selectedPrice = priceSelect.value;
  
  const yearSelect = document.getElementById('year');
  const selectedYear = yearSelect.value;

  console.log(yearSelect, priceSelect);
  
  // Filter the NodeList based on the user's inputs
  const productCards = document.querySelectorAll('.product-item');
  
  productCards.forEach(card => {
    const cardClasses = card.classList;
  
    if (
      (selectedMake === 'Make' || cardClasses.contains(selectedMake)) &&
      (selectedPrice === 'Price' || cardClasses.contains(selectedPrice)) &&
      (selectedYear === 'Year' || cardClasses.contains(selectedYear))
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}




