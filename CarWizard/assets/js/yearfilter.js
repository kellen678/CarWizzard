function getSelectedValueYear() {
    const selectValue = document.getElementById("year").value;
    const acceptedValues = ['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2009','2007'];
    const productCards = document.querySelectorAll('.product-item');
  
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
  