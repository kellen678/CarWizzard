function getSelectedValuePrice() {
  const selectValue = document.getElementById("price").value;
  const acceptedValues = ['0to5', '5to10', '15to20', '20to25', '25to30','30to35','35to40','40+'];
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

