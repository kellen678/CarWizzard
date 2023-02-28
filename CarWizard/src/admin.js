import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAtqdf8ezGL4ky51x9rB6dbewiO_WewYIM",
    authDomain: "fir-75746.firebaseapp.com",
    databaseURL: "https://fir-75746-default-rtdb.firebaseio.com/",
    projectId: "fir-75746",
    storageBucket: "fir-75746.appspot.com",
    messagingSenderId: "124486815404",
    appId: "1:124486815404:web:d3177ff865e14661511909",
    measurementId: "G-321E7EP80R"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function generateCarId() {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    document.getElementById("id").value = id;
    console.log(id);
    return id;
}


function addCar(){
    var Name = document.getElementById("Name").value;
    var Price = document.getElementById("Price").value;
    var Make = document.getElementById("Make").value;
    var Model = document.getElementById("Model")
    var Drivetrain = document.getElementById("Drivetrain").value;
    var Transmission = document.getElementById("Transmission").value;
    var Mileage = document.getElementById("Mileage").value;
    var FuelEfficiency = document.getElementById("FuelEfficiency").value;
    var Engine = document.getElementById("Engine").value;
    var Horsepower = document.getElementById("Horsepower").value;
    var Year = document.getElementById("Year").value;
    var InteriorColor = document.getElementById("Interior Color").value;
    var ExteriorColor = document.getElementById("Exterior Color").value;
    var VehicleDescription = document.getElementById("Vehicle Description").value;


    var carRef = database.ref('Cars/' + id);
    var carData = {
        name: Name,
        price: Price,
        make: Make,
        model: Model,
        drivetrain: Drivetrain,
        transmission: Transmission,
        mileage: Mileage,
        fuelEfficiency: FuelEfficiency,
        engine: Engine,
        horsepower: Horsepower,
        year: Year,
        interiorColor: InteriorColor,
        exteriorColor: ExteriorColor,
        vehicleDescription: VehicleDescription
    };
    carRef.set(carData)
      .then(function() {
        console.log("Data successfully written to the database.");
      })
      .catch(function(error) {
        console.error("Error writing data to the database: ", error);
      });
    }
