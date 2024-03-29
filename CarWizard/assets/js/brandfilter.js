function getSelectedValueMake() {
  const selectValue = document.getElementById("make").value;
  const acceptedValues = ['Acura', 'Audi', 'BMW', 'Chevrolet','Ford','Honda','Hyundai','Jeep','Kia','Nissan','Ram','Toyota','Volkswagen','Volvo','Mazda','Mercedes-Benz','Mini Coupe','Infiniti','Lexus'];
  const productCards = document.querySelectorAll('.product-item');

  productCards.forEach(card => {
    if(acceptedValues.includes(selectValue)) {
      if(card.classList.contains(selectValue)) {
        card.style.display = 'block';
        console.log(card);
      } else {
        card.style.display = 'none';
        console.log(card);
      }
    } else {
      card.style.display = 'block';
      console.log(card);
    }
  })
}

