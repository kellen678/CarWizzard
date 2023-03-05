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


const selectValuemake = document.getElementById("make").value;
const acceptedValuesmake = ['Acura', 'Audi', 'BMW', 'Chevrolet','Ford','Honda','Hyundai','Jeep','Kia','Nissan','Ram','Toyota','Volkswagen','Volvo','Mazda','Mercedes-Benz','Mini Coupe','Infiniti','Lexus'];
const productCardsmake = document.querySelectorAll('.product-item');
  
    productCardsmake.forEach(card => {
      if(acceptedValuesmake.includes(selectValuemake)) {
        if(card.classList.contains(selectValuemake)) {
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

    const selectValueprice = document.getElementById("year").value;
    const acceptedValuesprice = ['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2009','2007'];
    const productCardsprice = document.querySelectorAll('.product-item');
  
    productCardsprice.forEach(card => {
      if(acceptedValuesprice.includes(selectValueprice)) {
        if(card.classList.contains(selectValueprice)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else {
        card.style.display = 'block';
      }
    })
  }
  



