function getSelectedValuePrice() {
  const pricevalue = document.getElementById("price").value;
  const makevalue = document.getElementById("make").value;
  const yearvalue = document.getElementById("year").value;
  const acceptedValues = ['0to5', '5to10', '15to20', '20to25', '25to30','30to35','35to40', '35-40', '40+', 'Acura', 'Audi', 'BMW', 'Chevrolet','Ford','Honda','Hyundai','Jeep','Kia','Nissan','Ram','Toyota','Volkswagen','Volvo','Mazda','Mercedes-Benz','Mini Coupe','Infiniti','Lexus', '2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2009','2007'];
  const productCards = document.querySelectorAll('.product-item');

  productCards.forEach(card => {
    console.log(pricevalue, makevalue, yearvalue);

    if (pricevalue === "Price" && makevalue === "Make" && yearvalue === "Year"){
      console.log(card);
      return
    } else if (pricevalue != "Price" && makevalue != "Make"){

    }else if (pricevalue != "Price"){

    }else {

    }
  

    

    if(acceptedValues.includes(pricevalue || makevalue || yearvalue)) {
      if(card.classList.contains(yearvalue) || card.classList.contains(pricevalue) || card.classList.contains(makevalue) ) {
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
  }
}


