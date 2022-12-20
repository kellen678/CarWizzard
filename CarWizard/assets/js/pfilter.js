function getSelectedValue() {
    const selectValue = document.getElementsByClassName("item-price").value;
    const acceptedValues = ['camera', 'dvr'];
    const productCards = document.querySelectorAll('.product-card');
  
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
  