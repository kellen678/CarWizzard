<?php
$Condition = $_POST['Condition'];
$Make = $_POST['Make'];
$Model = $_POST['Model'];
$Drivetrain = $_POST['Drivetrain'];
$Transmission = $_POST['Transmission'];
$Mileage = $_POST['Mileage'];
$FuelEfficency = $_POST['FuelEfficency'];
$Engine = $_POST['Engine'];
$Horsepower = $_POST['Horsepower'];
$Year = $_POST['Year'];
$Interior = $_POST['Interior'];
$Exterior = $_POST['Exterior'];
$Description = $_POST['Description'];
$Extras = $_POST['Extras'];
$Name = $_POST['Name'];
$Images = $_POST['Images'];
$Price = $_POST['Price'];

if (!empty($Condition)|| !empty($Make)|| !empty($Model)|| !empty($Drivetrain)|| !empty($Transmission)|| !empty($Mileage)|| !empty($FuelEfficency)|| !empty($Engine)|| empty($Horsepower)|| !empty($Year)|| !empty($Interior)|| !empty($Exterior)|| !empty($Description)|| !empty($Extras)|| !empty($Name)||  !empty($Images)|| !empty($Price)) {
    $host = "local host";
    $dbUsername = "CarWizard";
    $dbPassword = "kIkjer-napvuw-qukde7";
    $dbname = "carwxnuq_cms";
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $INSERT = "INSERT Into register (Condition, Make, Model, Drivetrain, Transmission, Mileage, FuelEfficency, Condition, Engine, Horsepower, Year, Interior, Exterior, Description, Extras, Name, Images, Price)
        values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,)";
    }

} else {
echo "All fields are required";
    die();
}

?>