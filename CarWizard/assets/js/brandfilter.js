function getSelectedValue() {
    var selectValue = document.getElementById("make").value;
    console.log(selectValue);
    var acceptedValues = ['Acura', 'Audi', 'BMW', 'Chevrolet','Ford','Honda','Hyundai','Jeep', 'Kia','Nissan','Ram','Toyota','Volkswagen','Volvo','Mazda','Mercedes-Benz','Mini Coupe','Infiniti','Lexus',];

    const productCards = document.querySelectorAll('.product-item');
    console.log(productCards);
  
    productCards.forEach(card => {
      if(acceptedValues.includes(selectValue)) {
        if(card.classList.contains(selectValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else {
        card.style.display = 'block';
      }
    })
  }