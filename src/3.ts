function printComputer(computer:{

    name: String,
    model: string,
    company: String,
    year: Number,
    
}) {
    console.log(`${computer.name} ${computer.model} ${computer.company} ${computer.year}`)
}

printComputer({name:"Lenovo", model:"ThinkBook", company: "Apple", year: 2030})