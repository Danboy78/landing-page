//the .map() is best way of renderimg lists in react  u can refer back to Es6

export default function Lists() {
    const cars = ["Audi", "Ferrari", "Toyota", "Benz"];

    // Corrected loop
    cars.forEach((car) => {
        console.log(car);
    });

    // Mapping list items
    //.map() is almost like an alternative to for each in js the car there is the content of the array while id is the 
    const car_list = cars.map((car, id) => <li key={id}>{car}</li>);
    return (
        <ul>
            {car_list}
        </ul>
    )
    
}
